import { NextAuthOptions } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  // login kesa kro ga - google email github
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: 'Email',
          type: 'text'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      authorize(credentials, req) {
        
      },
    })
  ],
  callbacks: {

  },
  session: {

  },
  pages: {

  },
  secret: process.env.AUTH_SECRET
}

export default authOptions