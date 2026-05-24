import Navbar from "../../components/Navbar";

const suggestions = [

{
title:"Un estaminet oublié au cœur des Flandres",
category:"Estaminets",
status:"Nouveau"
},

{
title:"Pourquoi les beffrois dominaient les villes",
category:"Architecture",
status:"IA"
},

{
title:"Cette chapelle cachée près d'Ypres",
category:"Mémoire",
status:"À vérifier"
}

];

export default function Admin() {

return (

<main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

<Navbar/>

<section className="pt-36 pb-14 px-6">

<div className="max-w-6xl mx-auto">

<p className="uppercase tracking-[0.3em] text-[#B45A52] text-xs">

Administration

</p>

<h1 className="font-serif text-5xl md:text-7xl mt-6">

Centre éditorial IA

</h1>

<p className="mt-8 max-w-3xl text-[#645D58] leading-8">

Les propositions générées automatiquement
apparaîtront ici avant publication.

</p>

</div>

</section>



<section className="px-6 pb-24">

<div className="max-w-6xl mx-auto space-y-6">

{suggestions.map((item)=>(

<div
key={item.title}
className="bg-white rounded-3xl p-8 shadow-md"
>

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

<div>

<p className="uppercase text-xs text-[#B45A52]">

{item.category}

</p>

<h2 className="font-serif text-3xl mt-3">

{item.title}

</h2>

<p className="mt-3 text-sm text-[#999]">

{item.status}

</p>

</div>



<div className="flex flex-wrap gap-3">

<button className="bg-[#A5483C] text-white px-5 py-3 rounded-xl">

Publier

</button>

<button className="border px-5 py-3 rounded-xl">

Ignorer

</button>

<button className="border px-5 py-3 rounded-xl">

Régénérer image

</button>

</div>

</div>

</div>

))}

</div>

</section>

</main>

)

}