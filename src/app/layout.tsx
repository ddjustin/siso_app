import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import RecoilRootWrapper from "@/components/RecoilWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "시소",
  description: "시소",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
