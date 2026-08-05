import { NextResponse } from "next/server"; import { tournaments } from "@/lib/data";
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const tournament=tournaments.find(t=>id.startsWith(t.id));return tournament?NextResponse.json({data:tournament}):NextResponse.json({error:"Tournament not found"},{status:404})}
