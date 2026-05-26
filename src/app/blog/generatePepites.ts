"use server";

import OpenAI from "openai";
import { supabase } from "../../lib/supabase";
import { revalidatePath } from "next/cache";

const openai=new OpenAI({
apiKey:process.env.OPENAI_API_KEY
});

const prompt=`

Tu es un rédacteur expert du patrimoine des Hauts-de-France.

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
- Longueur obligatoire :
180 à 200 mots
- Ton chaleureux
- Narratif
- Pas de listes
- Donner envie d'en découvrir plus

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
nombre=20
){

for(let i=0;i<nombre;i++){

const completion=
await openai.chat.completions.create({

model:"gpt-4o",

messages:[

{
role:"user",
content:prompt
}

],

response_format:{
type:"json_object"
}

});

const data=
JSON.parse(
completion
.choices[0]
.message.content || "{}"
);

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
.toISOString(),

created_at:
new Date()
.toISOString()

});

}

revalidatePath("/admin");

}