"use server";

import { GoogleGenerativeAI }
from "@google/generative-ai";

import { supabase }
from "../../lib/supabase";

import { revalidatePath }
from "next/cache";

const genAI=
new GoogleGenerativeAI(
process.env.GEMINI_API_KEY!
);

const model=
genAI.getGenerativeModel({
model:"gemini-2.5-flash"
});

const prompt=`

Tu es un rédacteur expert du patrimoine
des Hauts-de-France.

Ta mission :

Créer une pépite culturelle captivante
sur un lieu,
une tradition,
une légende,
une architecture,
un estaminet
ou une anecdote méconnue du Nord.

Contraintes :

- Le titre doit être une vraie question intrigante

- Répondre clairement à la question dès les premières phrases

- Développer une histoire complète

- Ajouter un contexte historique précis

- Ajouter un détail surprenant

- Longueur :
180 à 200 mots

- Ton chaleureux

- Narratif

- Pas de listes

- Donner envie de découvrir davantage la région

Catégories autorisées :

Architecture
Histoire
Estaminets
Légendes
Insolite
Patrimoine
Belgique

Retour JSON uniquement :

{
"title":"",
"content":"",
"excerpt":"",
"category":""
}

`;

export async function generateInitialPepites(
nombre=3
){

for(let i=0;i<nombre;i++){

const result=
await model.generateContent(
prompt
);

const text=
result.response
.text()
.replace(/```json/g,"")
.replace(/```/g,"")
.trim();

console.log(
"Réponse Gemini :",
text
);


const data=
JSON.parse(text);

await supabase
.from("pepites")
.insert({

title:data.title,

content:data.content,

excerpt:data.excerpt,

category:data.category,

published:false,

featured_week:false,

ai_generated:true,

article_image:null,

date:
new Date()
.toISOString()

});

}

// revalidatePath("/admin");
// revalidatePath("/blog");
}