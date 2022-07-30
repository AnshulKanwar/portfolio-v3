import Head from "next/head";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Anshul Kanwar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
