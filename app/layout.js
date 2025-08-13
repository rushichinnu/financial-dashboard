import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wealth Elite - Financial Dashboard",
  description: "Professional financial dashboard for portfolio management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
