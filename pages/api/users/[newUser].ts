import { connectToDatabase } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/types/User";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User | string>
){
    const newUser = req.body;


    if(!newUser) {
        res.status(400).json("New user is not defined")
        return
    }

    if( req.method === "POST") {
        try {
            const user: User = JSON.parse(JSON.stringify(newUser));

            if(Object.values(user).some(value => !value)){
                res.status(400).json("Invalid user data")
                return
            }

            const db = await connectToDatabase()
            await db.collection("users").insertOne(user)
        } catch(error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
        }
    
    }else {
        res.status(405).send('Method ${req.method} Not Allowed')
    }
}