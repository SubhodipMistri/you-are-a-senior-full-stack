export type Tournament = { id:string; name:string; game:string; mode:string; prize:number; entry:number; teams:string; date:string; status:"Open"|"Live"|"Soon"; color:string; };
export const tournaments: Tournament[] = [
 {id:"neon-clash",name:"Neon Clash: Season 12",game:"Valorant",mode:"5v5 • Single Elim",prize:250000,entry:199,teams:"42 / 64",date:"Aug 16 · 6:00 PM",status:"Open",color:"from-violet-500 to-fuchsia-700"},
 {id:"rift-cup",name:"Rift Rivals Cup",game:"League of Legends",mode:"5v5 • Double Elim",prize:180000,entry:149,teams:"16 / 32",date:"Aug 18 · 4:30 PM",status:"Open",color:"from-cyan-500 to-blue-800"},
 {id:"apex-arena",name:"Apex Arena Series",game:"Apex Legends",mode:"Trios • Battle Royale",prize:120000,entry:99,teams:"57 / 60",date:"Aug 20 · 7:00 PM",status:"Soon",color:"from-orange-500 to-red-700"},
];
export const nav = ["Home","Games","Tournaments","Teams","Leaderboard","Rewards","News"];
