import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){

    try {
        const {title,description,image,userId}=await req.json()

        const dictionary=await db.dictionary.create({
            data:{
                title,
                description,
                image,
                userId
            }
        });

        
     


return NextResponse.json({message:"Dictionary created  successfully"},{status:200})
               
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
    }
}
