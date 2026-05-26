import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Asrafuzzaman Khan | Full-Stack Developer",
  description: "Full-stack developer with 3+ years of experience building scalable web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth min-h-screen">
      <body
        suppressHydrationWarning={true}
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white dark:bg-gray-950 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
