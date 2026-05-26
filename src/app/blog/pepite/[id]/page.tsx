import Navbar from "../../../../components/Navbar";
import { supabase } from "../../../../lib/supabase";
import Link from "next/link";

export default async function PepitePage({
params
}:{
params:Promise<{
id:string
}>
}){

const resolvedParams=
await params;

const {data:p}=await supabase
.from("pepites")
.select("*")
.eq(
"id",
Number(
resolvedParams.id
)
)
.single();

if(!p){

return(

<main className="min-h-screen bg-[#F6F1EA]">

<Navbar/>

<div className="pt-52 text-center">

Pépite introuvable

</div>

</main>

)

}

return(

<main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

<Navbar/>

<section className="pt-44 px-6 pb-20">

<div className="max-w-3xl mx-auto">

<p
className="
uppercase
text-sm
mb-6
text-[#B45A52]
"
>

{p.category}

</p>

<h1
className="
font-serif
text-4xl
md:text-6xl
leading-tight
"
>

{p.title}

</h1>

<p
className="
mt-6
text-[#8E837A]
"
>

{p.date}

</p>

{p.article_image &&(

<img
src={p.article_image}
className="
w-full
rounded-3xl
my-10
"
/>

)}

<div
className="
mt-6
text-[18px]
leading-9
text-[#645D58]
whitespace-pre-line
"
>

{p.content || p.excerpt || "Aucun contenu trouvé"}

</div>

<Link
href="/blog"
className="
inline-block
mt-12
italic
"
>

← Retour aux pépites

</Link>

</div>

</section>

</main>

)

}