import "@/styles/globals.css";

import { Open_Sans } from "next/font/google";
const osFont = Open_Sans({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }) {
  return (
    <div className={`${osFont.className}`}>
      <SpeedInsights />
      <Component {...pageProps} />
    </div>
  );
}
