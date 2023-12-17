import { db } from "@/lib/db"

export const getUserByUserName=async(username:string)=>{
    const user = await db.user.findUnique({
        where:{
            username
        }
    })

    return user;
}