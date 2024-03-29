import Head from "next/head";
import Footer from "./Footer";

const AppShell = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppShell;
