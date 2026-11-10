import Header from "../header/Header";
import Page from "../main/Page.jsx";
import Contact from "../contact/cont";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main><Page /><Contact /></main>
      <Footer />
    </>
  );
}
