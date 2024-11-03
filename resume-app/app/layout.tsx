import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import dotenv from "dotenv";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeSwitcher } from "@/components/ui/Theme";

dotenv.config();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Resume checker",
    description: "Free resume checker and analyzer. Get instant feedback on your resume and improve your chances of landing your dream job.",
    keywords: ["resume checker", "resume feedback", "resume improvement", "job application helper"],
    authors: [{ name: "Sanjay" }],
    openGraph: {
        title: "Resume checker",
        description: "Free resume checker and analyzer",
        type: "website",
        url: "https://7cb9-2405-201-c029-507f-9ded-5240-d879-b885.ngrok-free.app/",
        images: [
            {
                url: "/images/og-banner.png",
                width: 1200,
                height: 630,
                alt: "Resume checker preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Resume checker",
        description: "Free resume checker and analyzer",
        images: ["/images/og-banner.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code", // Add your Google Search Console verification code
    },
};

export default async function RootLayout({
    children,
}: React.PropsWithChildren) {
    const session = await auth();

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className="flex h-full min-h-screen w-full flex-col justify-between bg-background"
                suppressHydrationWarning
            >
                <NextUIProvider>
                    <NextThemesProvider attribute="class" defaultTheme="dark">
                        <SessionProvider session={session} basePath="/auth">
                            <Header />
                            {children}
                        </SessionProvider>
                    </NextThemesProvider>
                </NextUIProvider>
            </body>
        </html>
    );
}
