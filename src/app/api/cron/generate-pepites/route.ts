import { NextResponse }
from "next/server";

import {
generateInitialPepites
}
from "../../../blog/generatePepites";

export async function GET(){

try{

await generateInitialPepites(3);

return NextResponse.json({

success:true

});

}catch(error){

console.log(error);

return NextResponse.json({

success:false

});

}

}