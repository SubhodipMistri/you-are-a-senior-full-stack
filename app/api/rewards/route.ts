import { NextResponse } from "next/server";
export function GET(){return NextResponse.json({data:[{id:"steam500",title:"Steam Wallet ₹500",cost:5000,stock:50},{id:"pubg600",title:"PUBG 600 UC",cost:3800,stock:30}]})}
