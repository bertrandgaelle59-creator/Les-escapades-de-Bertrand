import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { getPepites } from "../actions";

export default async function Categorie({
params,
}:{
params:Promise<{ categorie:string }>;
}) {

const { categorie } =
await params;

const pepites =
await getPepites();

const universMap:any={

patrimoine:{

title:"Patrimoine & Architecture",

image:"/univers/patrimoine.png",

categories:[
"Architecture",
"Histoire",
"Patrimoine"
]

},

estaminets:{

title:"Bonnes adresses",

image:"/univers/estaminet.png",

categories:[
"Estaminets"
]

},

legendes:{

title:"Traditions & Folklore",

image:"/univers/traditions.png",

categories:[
"Legendes"
]

},

insolite:{

title:"Lieux insolites",

image:"/univers/lieux.png",

categories:[
"Insolite"
]

},

belgique:{

title:"Belgique Passionnément",

image:"/univers/belgique.png",

categories:[
"Belgique"
]

}

};

const currentUniverse=

universMap[
decodeURIComponent(categorie)
.toLowerCase()
];

const currentCategories=
currentUniverse?.categories || [];

const results=
pepites.filter(
(p:any)=>{

const category=
String(p.category || "")
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"");

return currentCategories.some(
(cat:string)=>

category===

String(cat)
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"")

);

});

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

case "Legendes":
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

<main className="bg-[#F6F1EA] min-h-screen">

<Navbar/>

<section
className="
relative
h-[420px]
overflow-hidden
"
>

<img
src={currentUniverse?.image}
alt={currentUniverse?.title}

className="
absolute
inset-0
w-full
h-full
object-cover
"
/>

<div
className="
absolute
inset-0
bg-black/45
"
/>

<div
className="
relative
z-10
h-full
flex
items-end
"
>

<div
className="
max-w-5xl
mx-auto
w-full
px-6
pb-16
text-white
"
>

<p
className="
uppercase
tracking-[0.3em]
text-xs
opacity-80
"
>

Explorer

</p>

<h1
className="
font-serif
text-4xl
md:text-6xl
mt-5
leading-tight
"
>

{currentUniverse?.title}

</h1>

<p
className="
mt-5
text-lg
opacity-90
"
>

{results.length} pépites à découvrir

</p>

</div>

</div>

</section>

<section className="px-6 py-20">

<div className="max-w-5xl mx-auto">

<div className="flex flex-col gap-4">

{results.map((p:any)=>(

<Link
href={`/blog/pepite/${p.id}`}
key={p.id}

className="
group
bg-white
rounded-2xl
px-6
py-5
transition
duration-300
hover:-translate-y-[2px]
"
style={{

borderLeft:
`5px solid ${
getCategoryColor(
p.category
)
}`,

boxShadow:
"0 6px 24px rgba(0,0,0,.05)"

}}
>

<div
className="
text-xs
font-bold
uppercase
tracking-[0.18em]
mb-3
"
style={{

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
text-2xl
leading-tight
group-hover:opacity-80
transition
"
>

{p.title}

</h2>

</Link>

))}

</div>

</div>

</section>

</main>

);

}