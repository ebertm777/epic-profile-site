"use client";
import Main from "./Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";

const Azem =
  "Herein I commit the chronicle of the traveler. Shepherd to the stars in the dark.";

console.log(
  "%c " + Azem,
  "background: #662d91; color: #ffffff; padding: 2px 4px; border-radius: 2px;"
);

export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  );
}
