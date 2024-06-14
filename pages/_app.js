import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Toaster position="top-right"/>
      <Component {...pageProps} />
    </SessionProvider>
  );
}