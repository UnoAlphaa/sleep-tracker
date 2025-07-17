"use server"
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteRecord(recordId : string): Promise<{
    message?:string;
    error? : string;
}>{
    const {userId} = await auth();

    if(!userId){
        return {error : 'user not foound'}
    }

    try{
        await db.record.delete({
            where : {id : recordId, userId},
        });
        revalidatePath('/');
        return {message : 'Record deleted successfully'}
    }catch(error){
        console.log(error);
        return {error : 'Database Error'}
    }
}

export default deleteRecord;