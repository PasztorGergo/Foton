import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, SideBar } from "../components";
import { Head } from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <SideBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
