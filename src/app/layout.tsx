import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/provider/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact Management",
  description: "Job Task Contact Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} bg-bodyColor`}>
          <>
            <Toaster position="bottom-right" richColors />
            {children}
          </>
          <div id="portal"></div>
        </body>
      </html>
    </Providers>
  );
}
