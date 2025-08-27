import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Foter";

interface ILayoutProps {
    children: ReactNode;
}
const Layout = ({children}: ILayoutProps) => {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )    
};

export default Layout;