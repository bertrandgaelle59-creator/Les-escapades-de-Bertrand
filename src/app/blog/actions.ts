import { supabase } from "../../lib/supabase";

export async function getPepites() {

  const { data, error } = await supabase
    .from("pepites")
    .select("*");

  if(error){

    console.log("ERREUR SUPABASE :", error);

    return [];

  }

  console.log("DONNEES :", data);

  return data || [];

}