import Chef from "@/Components/layout/Chef";
 
import Hero from "@/Components/layout/Hero";
import HomeMenu from "@/Components/layout/HomeMenu";
import OrderProcess from "@/Components/layout/OrderProcess";
import OurWork from "@/Components/layout/OurWork";

export default function Home() {
  return (
    <>
      <main className="max-w-5xl mx-auto">
        
        <Hero></Hero>
        <OurWork></OurWork>
        <HomeMenu></HomeMenu>
        <OrderProcess></OrderProcess>
      </main>
      <Chef></Chef>
       
    </>
  );
}
