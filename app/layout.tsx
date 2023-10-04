import "./globals.css";
import { Lexend_Deca } from "next/font/google";
import style from "./page.module.css";
import { Providers } from "@/store/provider";
import dynamic from "next/dynamic";

const Notification = dynamic(() => import("./../component/Notification"));
const AuthFormModel = dynamic(() => import("./../component/AuthForm"));
const Header = dynamic(() => import("./../component/Header"));
const Footer = dynamic(() => import("@/component/Footer"));

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.className} ${style.body}`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <AuthFormModel/>
          <Notification/>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
