import { Inter } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/data/siteMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PSAM",
  description: siteMetadata.couplesDetails.thankYouMessage,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>PSAM</title>
      </head>
      <body
        className={`${inter.className} bg-gradient-conic bg-primary h-full scrollbar-thin scrollbar-thumb-rose-gold scrollbar-thumb-rounded-md scrollbar-track-rounded-md scroll-m-1 scrollbar-track-white`}
      >
        {children}
      </body>
    </html>
  );
}
