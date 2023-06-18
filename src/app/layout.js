import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "NEXT HERO",
  description: "NEXT HERO",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.className} font-roboto`}>{children}</body>
    </html>
  );
};
export default RootLayout;
