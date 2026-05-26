import { supabase } from "../../lib/supabase";

export async function getPepites(){

const {data,error}=await supabase
.from("pepites")
.select("*");

if(error){

console.log(
"ERREUR SUPABASE :",
error
);

return[];

}

return data||[];

}

export async function getPublishedPepites(){

const {data,error}=await supabase
.from("pepites")
.select("*")
.eq(
"published",
true
);

if(error){

console.log(
"ERREUR SUPABASE:",
error
);

return[];

}

return data||[];

}