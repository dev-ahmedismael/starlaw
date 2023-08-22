import Header from "@/components/header/Header";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Theme from "./theme";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Star Law Firm</title>
        <meta
          name="description"
          content="Working Tirlessly Toward Successful Resolutions"
        />
      </head>
      <body className={inter.className}>
        <Theme>
          <Header />
          <main>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
