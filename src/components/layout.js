import Head from 'next/head';
import Header from './header';


const Layout = ({ children }) => {
  return (
    <div className="min-h-full">
      <Head>
        <title>My App</title>
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
