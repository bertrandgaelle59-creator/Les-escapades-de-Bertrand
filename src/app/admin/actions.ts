"use server";

import { supabase } from "../../lib/supabase";
import { revalidatePath } from "next/cache";


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

await supabase
.from("pepites")
.update({

title,
content,
image_prompt

})
.eq("id",id);


revalidatePath("/admin");
revalidatePath("/blog");

}



export async function publishPepite(
formData:FormData
){

const id=parseInt(
String(formData.get("id"))
);

await supabase
.from("pepites")
.update({

published:true

})
.eq("id",id);


revalidatePath("/admin");
revalidatePath("/blog");

}



export async function deletePepite(
formData:FormData
){

const id=parseInt(
String(formData.get("id"))
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
String(formData.get("id"))
);

const image_prompt=
String(
formData.get("image_prompt")
);


// Étape temporaire propre :
// on stocke le prompt validé.
// La génération OpenAI image
// sera branchée ensuite.

await supabase
.from("pepites")
.update({

image_prompt

})
.eq("id",id);


revalidatePath("/admin");
revalidatePath("/blog");

}