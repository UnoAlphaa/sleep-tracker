"use server"
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getWorstBestSleep () : Promise<{
  worstSleep?: number;
  bestSleep?: number;
  error?: string;
}> {
        const {userId} = await auth();
        if(!userId){
            return {error : 'User not found'}
        }        

        try{
            // fetch all records for the authenticated user 
            const records = await db.record.findMany({
                where : {userId},
                select : {amount:true},
            });
            if(!records || records.length === 0){
                return {bestSleep : 0, worstSleep : 0}
            }

            const amount = records.map((record)=>record.amount);
            //calculate best sleep and worst sleep amount 
            const bestSleep = Math.max(...amount);
            const worstSleep = Math.min(...amount);
            return {bestSleep, worstSleep}
        }catch(error){
            console.log(error)
            return {error : 'Database Error'}    
        }
}

export default getWorstBestSleep