import Header from "../components/header";
import Navbar from "../components/nav";
import Footer from "../components/footer";

export default function format({ children }) {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <main> {children} </main>
      <Footer></Footer>
    </>
  );
}
