import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async ()=>{
    const user = await currentUser();

    if(!user){
        return null
    }

    //check if user exists in the database
    const loggedInUser = await db.user.findUnique({
        where: {
            clerkUserId : user.id
        }
    });

    //if user already exists in the database, return the user
    if(loggedInUser){
        return loggedInUser;
    } 
    
    //if no user in the database, create a new user
    const newUser = await db.user.create({
        data :  {
            clerkUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
        }
    });

    return newUser;
}