// import NextAuth from "next-auth"
// import "next-auth/jwt"
// import GitHub from "next-auth/providers/github"

// // const storage = createStorage({
// //   driver: process.env.VERCEL
// //     ? vercelKVDriver({
// //         url: process.env.AUTH_KV_REST_API_URL,
// //         token: process.env.AUTH_KV_REST_API_TOKEN,
// //         env: false,
// //       })
// //     : memoryDriver(),
// // })

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   theme: { logo: "https://authjs.dev/img/logo-sm.png" },
//   providers: [
//     GitHub,
//   ],
//   basePath: "/auth",
//   session: { strategy: "jwt" },
//   experimental: { enableWebAuthn: true },
// })

// // declare module "next-auth" {
// //   interface Session {
// //     accessToken?: string
// //   }
// // }

// // declare module "next-auth/jwt" {
// //   interface JWT {
// //     accessToken?: string
// //   }
// // }


import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  basePath: "/auth",
  session: { strategy: "jwt" },
  experimental: { enableWebAuthn: true },
});
