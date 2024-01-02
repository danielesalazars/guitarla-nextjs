import { Outfit } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  style: ["normal"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
