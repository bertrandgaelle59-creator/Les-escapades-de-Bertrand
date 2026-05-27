import Navbar from "../../components/Navbar";
import { getPepites } from "../blog/actions";

import {
updatePepite,
publishPepite,
deletePepite,
regenerateImage,
generateThreePepites
}
from "./actions";

export default async function Admin(){

const allPepites=
await getPepites();

const drafts=
allPepites.filter(
(p:any)=>
p.published!==true
);

const published=
allPepites.filter(
(p:any)=>
p.published===true
);

return(

<main className="bg-[#F6F1EA] min-h-screen">

<Navbar/>

<section className="pt-56 px-6">

<div className="max-w-6xl mx-auto">

<h1 className="font-serif text-5xl mb-10">

Administration

</h1>

<div className="mb-8">

<form action={generateThreePepites}>

<button
className="
bg-[#B45A52]
text-white
px-6
py-3
rounded-xl
"
>

🧪 Générer 3 pépites (test)

</button>

</form>

</div>

<h2
className="
text-3xl
font-serif
mb-8
"
>

Brouillons IA

</h2>

{drafts.map((item:any)=>(

<form
key={item.id}
action={updatePepite}
className="
bg-white
p-8
rounded-3xl
mb-8
shadow
"
>

<input
type="hidden"
name="id"
value={item.id}
/>

<input
type="hidden"
name="category"
value={item.category}
/>

<p className="text-sm mb-3 text-[#A5483C]">

{item.category}

</p>

<p className="text-sm mb-4 font-bold">

Statut :

{item.published
? " ✅ Publié"
: " ⏳ Brouillon"}

</p>

<input
name="title"
defaultValue={item.title}
className="
w-full
border
p-4
rounded-xl
mb-4
"
/>

<textarea
name="content"
defaultValue={item.content}
className="
w-full
border
p-4
rounded-xl
min-h-[220px]
"
/>

<p className="mt-6 mb-2 font-bold">

Prompt image IA

</p>

<textarea
name="image_prompt"
defaultValue={
item.image_prompt||""
}
className="
w-full
border
p-4
rounded-xl
min-h-[100px]
"
/>

<p className="mt-6 mb-2 font-bold">

Image illustration

</p>

<input
name="article_image"
defaultValue={
item.article_image||""
}
placeholder="/images/geants.jpg"
className="
w-full
border
p-4
rounded-xl
"
/>

<div className="flex flex-wrap">

<button
type="submit"
style={{
background:"#34D399"
}}
className="
mt-6
px-6
py-4
rounded-xl
font-bold
"
>

💾 Sauvegarder

</button>

<button
formAction={publishPepite}
style={{
background:"#F59E0B"
}}
className="
mt-6
ml-3
px-6
py-4
rounded-xl
font-bold
"
>

🚀 Publier

</button>

<button
formAction={deletePepite}
style={{
background:"#EF4444"
}}
className="
mt-6
ml-3
px-6
py-4
rounded-xl
font-bold
text-white
"
>

🗑 Supprimer

</button>

<button
formAction={regenerateImage}
style={{
background:"#6366F1"
}}
className="
mt-6
ml-3
px-6
py-4
rounded-xl
font-bold
text-white
"
>

🖼 Régénérer image

</button>

</div>

</form>

))}

<h2
className="
text-3xl
font-serif
mt-20
mb-8
"
>

Déjà publiées

</h2>

{published.map((item:any)=>(

<div
key={item.id}
className="
bg-white
p-6
rounded-3xl
mb-6
opacity-70
"
>

<p>

{item.title}

</p>

<p
className="
text-sm
text-gray-500
mt-2
"
>

{item.date}

</p>

</div>

))}

</div>

</section>

</main>

);

}