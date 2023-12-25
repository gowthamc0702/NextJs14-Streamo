import { db } from "@/lib/db"

export const getUserByUserName=async(username:string)=>{
    const user = await db.user.findUnique({
        where:{
            username
        },
        include:{
            stream:true
        }
    })

    return user;
}

export const getUserByUserId=async(id:string)=>{
    const user =await db.user.findUnique({
        where:{id},
        include:{
            stream:true
        }
    })
    return user
}