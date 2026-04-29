"use client";
import Main from "./Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";
import Chronicle from "./Main/Chronicle.jsx";

export default function Home() {
  return (
    <>
    <Chronicle/>
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}
