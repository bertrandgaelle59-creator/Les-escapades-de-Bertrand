import {
getTheme
}
from "../../lib/categoryTheme";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getPublishedPepites } from "./actions";

export default async function Blog() {

const pepites =
await getPublishedPepites();

const featured=
[...pepites]
.sort(
(a:any,b:any)=>
new Date(b.date).getTime()-
new Date(a.date).getTime()
)
.slice(0,3);

const archives =
[...pepites]
.sort(
(a:any,b:any)=>
new Date(b.date).getTime()-
new Date(a.date).getTime()
)
.slice(3);


const univers=[

{
nom:"Patrimoine & Architecture",
categories:[
"Architecture",
"Histoire",
"Patrimoine"
],
color:"#C77B6A",
image:"/univers/patrimoine.png"
},

{
nom:"Bonnes adresses",
categories:[
"Estaminets"
],
color:"#9CAF88",
image:"/univers/estaminet.png"
},

{
nom:"Traditions & Folklore",
categories:[
"Légendes"
],
color:"#90A8B8",
image:"/univers/traditions.png"
},

{
nom:"Lieux insolites",
categories:[
"Insolite"
],
color:"#D8BF8A",
image:"/univers/lieux.png"
},

{
nom:"Belgique Passionnément",
categories:[
"Belgique"
],
color:"#B494B8",
image:"/univers/belgique.png"
}

];


const getCategoryColor=(category:string)=>{

switch(category){

case "Architecture":
case "Histoire":
case "Patrimoine":
return "#C77B6A";

case "Estaminets":
return "#9CAF88";

case "Légendes":
return "#90A8B8";

case "Insolite":
return "#D8BF8A";

case "Belgique":
return "#B494B8";

default:
return "#DDD";

}

};


return(

<main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

<Navbar/>


<section className="pt-44 pb-2 px-6">

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
mt-8
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
mt-4
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
pb-0
mt-[-45px]
bg-gradient-to-b
from-[#F6F1EA]
to-[#F9F6F2]
"
>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

{featured.map((p:any)=>(

<Link
href={`/blog/pepite/${p.id}`}
key={p.id}
className="
group
rounded-[24px]
duration-300
hover:-translate-y-1
"
style={{

background:
getCategoryColor(
p.category
)+"15"

}}
>

<div
style={{
background:
getCategoryColor(
p.category
)
}}
className="h-[2px] opacity-60"
/>
<div className="p-4 md:p-5">


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
background:
getCategoryColor(
p.category
)+"20",

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
mt-3
leading-6
text-[14px]
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
mt-5
inline-flex
items-center
gap-3
text-sm
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



<section className="bg-white pt-0 pb-0 px-6">

<div className="w-full max-w-6xl mx-auto">

<div className="mb-44">

<h2
className="
font-serif
text-2xl
md:text-3xl
leading-tight
max-w-3xl
"
>

(Re)Découvrez toutes nos pépites

</h2>

</div>


<div
className="
flex
gap-3
items-start
overflow-hidden
"
>

{univers.map((u:any)=>(

<Link
key={u.nom}
href={`/blog/${u.nom
.toLowerCase()
.replaceAll("&","")
.replaceAll(" ","-")
}`}
className="
group
flex-1
min-w-0
"
>

<div
className="
overflow-hidden
rounded-sm
bg-[#EEE9E2]
"
>

<img
src={u.image}
alt={u.nom}

className="
w-full
aspect-[2/5]
object-cover
object-center
transition
duration-700
group-hover:scale-105
"
/>

</div>

<div
className="
mt-3
text-center
flex
flex-col
items-center
"
>

<h3
className="
font-serif
text-x1
md:text-[28px]
leading-tight
min-h-[20px]
px-3
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

{" "}escapades

</p>

<div
className="
w-10
h-[2px]
mx-auto
mt-6
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