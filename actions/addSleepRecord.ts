"use server"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

interface RecordData {
    text : string;
    amount : number;
    date : string;
}

interface RecordResult {
    data?:RecordData;
    error?:string;
}


async function addSleepRecord(formData : FormData): Promise<RecordResult> {
    const textValue = formData.get("text");
    const amountValue = formData.get("amount");
    const dateValue = formData.get("date")


    //check for input values
    if(!textValue || textValue === "" || !amountValue || !dateValue || dateValue === "" ){
        return {error : "Text, amount or date values missing"}
    }

    const text:string = textValue.toString();//Ensure text is a string
    const amount:number = parseFloat(amountValue.toString()); //parse amount to number
    let date : string;
    try{
        date = new Date(dateValue.toString()).toISOString()//convert date to ISO string
    }catch (error){
        console.log("Invalid Date Format", error)
        return {error : "Invalid date Format"}
    }

    const {userId} = await auth();

    if(!userId){
        return {error : "User not forund"}
    }

    try {
        //check if a record with the same date already exists
        const existingRecord = await db.record.findFirst({
            where : {
                userId,
                date : date
            },
        });

        let recordData : RecordData;

        if(existingRecord){
            //update the existing record
            const updateRecord = await db.record.update({
                where : {
                    id : existingRecord.id
                },
                data : {
                    text,
                    amount,
                }
            });

            recordData = {
                text : updateRecord.text,
                amount : updateRecord.amount,
                date : updateRecord.date?.toISOString() || date,
            }
        }else {

            //create a new record
            const createRecord = await db.record.create({
                data : {
                    text,
                    amount,
                    userId,
                    date,
                }
            })
            recordData = {
                text : createRecord.text,
                amount : createRecord.amount,
                date : createRecord.date.toISOString() || date,
            };
        }
        revalidatePath('/');
        return {data : recordData};
    }catch (error){
        console.log("Error creating or updating record", error)
        return {error : "Internal server error"}
    };
    
}

export default addSleepRecord;