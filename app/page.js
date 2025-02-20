"use client";
import Main from "./Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/Navbar/Navbar.jsx";

const Azem =
  "Herein I commit the chronicle of the traveler. Shepherd to the stars in the dark. Though the world be sundered and our souls set adrift, where you walk, my dearest friend, fate shall surely follow. For yours is the Fourteenth seat--the seat of Azem. ";

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
