import "@/styles/globals.css";

import { Open_Sans } from "next/font/google";
const osFont = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${osFont.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
