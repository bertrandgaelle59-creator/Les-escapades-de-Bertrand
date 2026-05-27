"use server";

import { generateInitialPepites }
from "../blog/generatePepites";

import { supabase }
from "../../lib/supabase";

import { revalidatePath }
from "next/cache";


export async function updatePepite(
formData:FormData
){

const id=parseInt(
String(formData.get("id"))
);

const title=String(
formData.get("title")
).trim();

const content=String(
formData.get("content")
);

const image_prompt=
String(
formData.get("image_prompt")
);

const article_image=
String(
formData.get(
"article_image"
)
);

await supabase
.from("pepites")
.update({

title,
content,
image_prompt,
article_image

})
.eq("id",id);

revalidatePath("/admin");
revalidatePath("/blog");

}



export async function publishPepite(
formData:FormData
){

const id=parseInt(
String(
formData.get("id")
)
);

await supabase
.from("pepites")
.update({

published:true,
featured_week:true,
status:"published"

})
.eq("id",id);

revalidatePath("/admin");
revalidatePath("/blog");

}



export async function deletePepite(
formData:FormData
){

const id=parseInt(
String(
formData.get("id"))
);

await supabase
.from("pepites")
.delete()
.eq("id",id);

revalidatePath("/admin");
revalidatePath("/blog");

}



export async function regenerateImage(
formData:FormData
){

const id=parseInt(
String(
formData.get("id"))
);

const image_prompt=
String(
formData.get(
"image_prompt"
)
);

await supabase
.from("pepites")
.update({

image_prompt

})
.eq("id",id);

revalidatePath("/admin");
revalidatePath("/blog");

}


export async function generateThreePepites(){

console.log(
"=== GÉNÉRATION LANCÉE ==="
);

await generateInitialPepites(3);

console.log(
"=== GÉNÉRATION TERMINÉE ==="

);

}
