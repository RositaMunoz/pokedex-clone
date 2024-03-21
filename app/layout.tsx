import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const flexo = localFont({
  src: [
    {
      path: "../public/fonts/Flexo-Regular.ttf",
      weight: "400"
    },
    {
      path: "../public/fonts/Flexo-Medium.ttf",
      weight: "500"
    },
    {
      path: "../public/fonts/Flexo-Demi.ttf",
      weight: "600"
    },
    {
      path: "../public/fonts/Flexo-Bold.ttf",
      weight: "700"
    }
  ],
  variable: '--font-flexo'
})

export const metadata: Metadata = {
  title: "Pokédex Clone",
  description: "Clone of Pokédex using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${flexo.variable} font-sans`}>
        <main className="flex min-h-screen flex-col items-center justify-between bg-dark-background">
          <div className="flex justify-center min-h-screen md:w-5/6 w-full bg-white bg-light-background">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
