import { NextAuthOptions } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import connectDB from "./connectDB"
import User from "@/model/user.model"
import bcrypt from "bcryptjs"
import GoogleProvider from "next-auth/providers/google";


const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: 'Email',
          type: 'email'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      // sign in functional
      async authorize(credentials, req) {

        const email = credentials?.email
        const password = credentials?.password

        if (!email || !password) {
          throw new Error('Email and password is required')
        }

        await connectDB()

        const user = await User.findOne({ email })

        if (!user) {
          throw new Error('User not found')
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if (!isPasswordMatch) {
          throw new Error('Incorrect password')
        }

        return {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image
        }

      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    // token ka under user details dali
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.image = user.image
      }
      return token
    },

    // token sa data session ma store krna
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.image as string
      }
      return session
    },

    // for login signup with google
    async signIn({ account, user }) {
      try {
        if (account?.provider == 'google') {
          await connectDB()

          let existUser = await User.findOne({
            email: user.email
          })

          if (!existUser) {
            existUser = await User.create({
              name: user.name,
              email: user.email
            })
          }

          user.id = existUser._id.toString()
        }

        return true

      }

      catch (error) {
        console.log('Google Sign in Err:', error);
        return false
      }
    },

  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  pages: {
    signIn: '/signin',
    error: '/signin'
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default authOptions