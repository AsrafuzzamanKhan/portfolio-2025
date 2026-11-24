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

const siteTitle = "Asrafuzzaman Khan | Full Stack Developer in Adelaide";
const siteDescription =
  "Adelaide-based full-stack developer with 3+ years of experience building web apps with TypeScript, React, Next.js and Node.js. View my work and get in touch.";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "MD. Asrafuzzaman Khan",
  jobTitle: "Full Stack Developer",
  email: "mailto:asrafuzzamankhan89@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Adelaide",
    addressRegion: "SA",
    addressCountry: "AU",
  },
  alumniOf: "University of the Sunshine Coast",
  knowsAbout: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB"],
  sameAs: [
    "https://github.com/AsrafuzzamanKhan",
    "https://www.linkedin.com/in/asrafuzzaman-khan",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className="scroll-smooth min-h-screen" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white dark:bg-gray-950 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
