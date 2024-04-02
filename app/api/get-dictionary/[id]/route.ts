import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest,params:any){

    try {
        const id=params.params.id;

        const dictionary=await db.dictionary.findMany({
          where:{
            id:id
          }
        });

        
     


return NextResponse.json({message:"Dictionary fetched  successfully",dictionary},{status:200})
               
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
    }
}

export async function DELETE(req:NextRequest,params:any){

  try {
      const id=params.params.id;

      const dictionary=await db.dictionary.delete({
        where:{
          id:id
        }
      });

      
   


return NextResponse.json({message:"Dictionary deleted  successfully"},{status:200})
             
  } catch (error) {
      return NextResponse.json({message:"Something went wrong",error},{status:500})
  }
}