import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers:[
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize(credentials, req){
                const {email, password} = credentials as {
                    email: string;
                    password: string;
                };
                // använd din egna logik här
                // hitta användare från db
                //Simple hårdkodad användare

                if(email !== "simon_kern@hotmail.com" && password !== "1234"){
                    return null;
                }

                // Om allt fungerar
                return {id: "1234", name: "Simon Kern", email: "simon_kern@hotmail.com"}
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
};

export default NextAuth(authOptions);