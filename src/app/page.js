import AboutUs from "@/Components/AboutUs/AboutUs";
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
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
