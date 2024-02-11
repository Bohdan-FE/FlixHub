import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/app/lib/prisma";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET,
  session: {strategy: 'jwt'},
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const existingUser = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (!existingUser) {
          return null
        }

        const passwordMatch = await compare(credentials.password, existingUser.password)
        if (!passwordMatch) {
          return null
        }

        return {
          id: existingUser.id + '',
          name: existingUser.name,
          email: existingUser.email
        }
      }
    })
  ], 
  callbacks: {
    async jwt({user, token}): Promise<any> {
      if (user) {
        return {
          ...token,
          id: user.id
        }
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id
        }
      }
    }
  }
}