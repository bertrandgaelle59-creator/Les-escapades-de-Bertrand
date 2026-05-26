export const categoryTheme={

Architecture:{
color:"#C77B6A",
bg:"#F4E4E0"
},

Histoire:{
color:"#C77B6A",
bg:"#F4E4E0"
},

Patrimoine:{
color:"#C77B6A",
bg:"#F4E4E0"
},

Estaminets:{
color:"#9CAF88",
bg:"#EAF1E6"
},

Légendes:{
color:"#90A8B8",
bg:"#E8EEF2"
},

Insolite:{
color:"#D8BF8A",
bg:"#F6F0DF"
},

Belgique:{
color:"#B494B8",
bg:"#F2EAF3"
}

};


export function getTheme(
category:string
){

return(

categoryTheme[
category as keyof
typeof categoryTheme
]

||

{

color:"#B8B8B8",
bg:"#F5F5F5"

}

);

}