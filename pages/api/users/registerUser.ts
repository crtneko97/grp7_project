import { NextApiRequest, NextApiHandler, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";
import {User} from "@/types/User";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User | User[] | string>
    ) {
    try {
        const db = await connectToDatabase()

        switch (req.method) {
            case "POST": {

            const db = await connectToDatabase()
            const users = await db.collection("users").find().toArray()
            
            const convertedUsers: User[] = users.map((userDoc) => {
            
                return {
                email: userDoc.name as string,
                password: userDoc.email as string,
                }
            })

            if (convertedUsers.length === 0){
                console.log("EMPTY");
                res.status(200).json("EMPTY");
            }else {
                res.status(200).json(convertedUsers);
            }
        
            break;

        }

        default: {

            res.setHeader("Allow", ["GET", "POST"])
            res.status(405).end('Method ${req.method} Not Allowed')
            break;
        }

        }
    } catch (error) {
        throw new Error("Something went wrong " + error)
    }
}