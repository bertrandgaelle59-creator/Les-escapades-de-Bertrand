"use server";

import { GoogleGenerativeAI }
from "@google/generative-ai";

import { supabase }
from "../../lib/supabase";

const genAI=
new GoogleGenerativeAI(
process.env.GEMINI_API_KEY!
);

export async function generateInitialPepites(
nombre=3
){

let model=
genAI.getGenerativeModel({

model:"gemini-2.5-flash"

});

for(
let i=0;
i<nombre;
i++
){

const prompt=`

Tu es un rédacteur expert du patrimoine
des Hauts-de-France et de Belgique.

Ta mission :

Créer une pépite culturelle captivante sur :

- un lieu méconnu
- une tradition
- une légende
- une architecture
- un estaminet
- une anecdote historique
- une spécialité locale
- un personnage régional
- une curiosité belge
- un patrimoine insolite

IMPORTANT :

Varie fortement les sujets.

Évite de revenir trop souvent sur :

- la bourle
- les jeux d'estaminets
- les portes secrètes
- les mêmes traditions flamandes

Cherche régulièrement :

- Lille
- Arras
- Dunkerque
- Cassel
- Valenciennes
- Lens
- Béthune
- Le Touquet
- Flandre belge
- Wallonie
- villages méconnus

Contraintes :

- Le titre doit être une vraie question intrigante

- Répondre à la question dès les premières phrases

- Développer une histoire complète

- Ajouter un contexte historique

- Ajouter un détail surprenant

- Longueur :
180 à 220 mots

- Ton chaleureux

- Narratif

- Pas de listes

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

let result;

try{

result=
await model.generateContent(
prompt
);

}catch(error){

console.log(
"Gemini temporairement saturé"
);

continue;

}

let text=
result.response.text();

text=
text
.replace(
/```json/g,
""
)
.replace(
/```/g,
""
)
.trim();

console.log(
"RÉPONSE GEMINI :"
);

console.log(text);

let data;

try{

data=
JSON.parse(text);

}catch{

console.log(
"JSON invalide"
);

continue;

}

await supabase
.from("pepites")
.insert({

title:
data.title,

content:
data.content,

excerpt:
data.excerpt,

category:
data.category,

published:false,

featured_week:false,

status:"draft",

ai_generated:true

});

}

}