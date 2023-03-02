import { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
    </>
  );
};

export default App;
