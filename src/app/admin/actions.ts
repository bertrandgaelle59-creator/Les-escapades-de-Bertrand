"use server";

import { supabase } from "../../lib/supabase";

export async function updatePepite(
id:number,
title:string,
content:string
){

const {error}=await supabase
.from("pepites")
.update({

title:title,
content:content

})
.eq("id",id);

if(error){

console.log(error);

}

}