import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getPepites } from "./actions";

export default async function Blog(){

const pepites=
await getPepites();

const featured=
[...pepites]
.filter(
(p:any)=>
p.published===true
)
.sort(
(a:any,b:any)=>
new Date(b.date).getTime()-
new Date(a.date).getTime()
)
.slice(0,3);

const univers=[

{
nom:"Patrimoine & Architecture",

slug:"patrimoine",

categories:[
"Architecture",
"Histoire",
"Patrimoine"
],

color:"#B35C44",

image:"/univers/patrimoine.png"
},

{
nom:"Bonnes adresses",

slug:"estaminets",

categories:[
"Estaminets"
],

color:"#667C52",

image:"/univers/estaminet.png"
},

{
nom:"Traditions & Folklore",

slug:"legendes",

categories:[
"Légendes"
],

color:"#4F6D8A",

image:"/univers/traditions.png"
},

{
nom:"Lieux insolites",

slug:"insolite",

categories:[
"Insolite"
],

color:"#C29547",

image:"/univers/lieux.png"
},

{
nom:"Belgique Passionnément",

slug:"belgique",

categories:[
"Belgique"
],

color:"#6D4C7D",

image:"/univers/belgique.png"
}

];

const getCategoryColor=(
category:string
)=>{

switch(category){

case "Architecture":
return "#B35C44";

case "Histoire":
return "#A64E3C";

case "Patrimoine":
return "#C56A50";

case "Estaminets":
return "#667C52";

case "Légendes":
return "#4F6D8A";

case "Insolite":
return "#C29547";

case "Belgique":
return "#6D4C7D";

default:
return "#B0A79F";

}

};

return(

<main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

<Navbar/>

<section className="pt-44 pb-8 px-6">

<div className="max-w-6xl mx-auto">

<p
className="
uppercase
tracking-[0.18em]
text-[#B45A52]
text-xl
md:text-2xl
font-semibold
mb-6
"
>

Blog des Pépites

</p>

<p
className="
mt-6
max-w-3xl
leading-8
text-[#645D58]
"
>

Chaque semaine, Bertrand vous emmène découvrir
des anecdotes étonnantes, bonnes adresses,
lieux insolites et histoires méconnues
du Nord et de Belgique.

</p>

<h1
className="
font-serif
text-2xl
md:text-3xl
mt-8
leading-tight
max-w-3xl
"
>

Les 3 nouvelles pépites à découvrir cette semaine

</h1>

</div>

</section>


<section
className="
px-6
pb-12
mt-[-25px]
"
>

<div
className="
max-w-6xl
mx-auto
grid
md:grid-cols-3
gap-8
"
>

{featured.map((p:any)=>(

<Link
href={`/blog/pepite/${p.id}`}
key={p.id}
className="
group
rounded-[28px]
overflow-hidden
duration-300
hover:-translate-y-1
bg-white
"
style={{

borderTop:
`6px solid ${
getCategoryColor(
p.category
)
}`,

boxShadow:
"0 10px 35px rgba(0,0,0,.08)"

}}
>

<div className="p-6">

<div
className="
inline-block
px-4
py-2
rounded-full
text-xs
font-bold
mb-5
"
style={{

background:"#F8F6F2",

color:
getCategoryColor(
p.category
)

}}
>

{p.category}

</div>

<h2
className="
font-serif
text-xl
md:text-2xl
leading-tight
"
>

{p.title}

</h2>

<p
className="
mt-4
leading-7
text-[15px]
text-[#645D58]
line-clamp-3
"
>

{p.excerpt}

</p>

<p
className="
mt-5
text-sm
text-[#8E837A]
"
>

{p.date}

</p>

<div
className="
mt-6
inline-flex
items-center
gap-3
italic
"
style={{

color:
getCategoryColor(
p.category
)

}}
>

Découvrir

<span
className="
text-xl
group-hover:translate-x-1
duration-300
"
>

→

</span>

</div>

</div>

</Link>

))}

</div>

</section>


<section
className="
bg-white
pt-8
pb-10
px-6
"
>

<div className="max-w-6xl mx-auto">

<div className="mb-14">

<h2
className="
font-serif
text-2xl
md:text-3xl
leading-tight
"
>

(Re)Découvrez toutes nos pépites

</h2>

</div>

<div
className="
flex
gap-4
items-start
overflow-hidden
"
>

{univers.map((u:any)=>(

<Link
key={u.nom}
href={`/blog/${u.slug}`}

className="
group
flex-1
min-w-0
"
>

<div
className="
overflow-hidden
rounded-xl
"
>

<img
src={u.image}
alt={u.nom}

className="
w-full
aspect-[2/5]
object-cover
transition
duration-700
group-hover:scale-105
"
/>

</div>

<div
className="
mt-4
text-center
"
>

<h3
className="
font-serif
text-[26px]
leading-tight
"
>

{u.nom}

</h3>

<p
className="
mt-2
text-sm
text-[#8E837A]
"
>

{
pepites.filter(
(item:any)=>

u.categories.includes(
item.category
)

).length
}

{" "}pépites

</p>

<div
className="
w-12
h-[3px]
mx-auto
mt-5
rounded-full
"
style={{
background:u.color
}}
/>

</div>

</Link>

))}

</div>

</div>

</section>

</main>

)

}