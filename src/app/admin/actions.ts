"use server";

import { supabase } from "../../lib/supabase";
import { revalidatePath } from "next/cache";

export async function updatePepite(
formData:FormData
){

const id=parseInt(
String(formData.get("id"))
);

if(!id){
return;
}

const title=String(
formData.get("title")
).trim();

const content=String(
formData.get("content")
);

await supabase
.from("pepites")
.update({
title,
content
})
.eq("id",id);

revalidatePath("/admin");

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

}

export async function regenerateImage(
formData:FormData
){

const id=parseInt(
String(formData.get("id"))
);

await supabase
.from("pepites")
.update({
image:"https://picsum.photos/1200/800"
})
.eq("id",id);

revalidatePath("/admin");

}