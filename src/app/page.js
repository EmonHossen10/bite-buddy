import AboutUs from "@/Components/AboutUs/AboutUs";
import Profile from "@/Components/Profile/Profile";
import Header from "@/Components/layout/Header";
import Hero from "@/Components/layout/Hero";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutUs/>
    </>
  );
}
