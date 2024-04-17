import AboutUs from "@/Components/AboutUs/AboutUs";
import Profile from "@/Components/Profile/Profile";
import Chef from "@/Components/layout/Chef";
import Footer from "@/Components/layout/Footer";
import Header from "@/Components/layout/Header";
import Hero from "@/Components/layout/Hero";
import HomeMenu from "@/Components/layout/HomeMenu";
import OrderProcess from "@/Components/layout/OrderProcess";
import OurWork from "@/Components/layout/OurWork";

export default function Home() {
  return (
    <>
      {/* <Header></Header>
      <Hero></Hero> */}
      
      <main className="max-w-5xl mx-auto">
        <Header></Header>
        <Hero></Hero>
        <OurWork></OurWork>
        <HomeMenu></HomeMenu>
        <AboutUs/>
        <OrderProcess></OrderProcess>
      </main>
      <Chef></Chef>
      <Footer></Footer>
    </>
  );
}
