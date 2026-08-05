import { NextResponse } from "next/server";
export function GET(){return NextResponse.json({data:{balance:2480,currency:"INR",transactions:[{id:"tx_1",type:"PRIZE",amount:1500,status:"COMPLETED"},{id:"tx_2",type:"ENTRY_FEE",amount:-149,status:"COMPLETED"}]}})}
