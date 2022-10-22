import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Navbar, SideBar } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <SideBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
