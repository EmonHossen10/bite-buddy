import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import Header from "@/Components/layout/Header";
import Hero from "@/Components/layout/Hero";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <section className="shadow-xl my-10 rounded-xl p-3">
        <SectionTitle
          subHeading="Mission and Values"
          heading="About Us"
        ></SectionTitle>
        <p className="text-xs text-gray-400 p-5">
          Whether you are craving comforting classics, exotic cuisines, or
          healthy options, we have got you covered. Our curated selection of
          restaurants ensures that every palate finds its perfect match. From
          sizzling pizzas to gourmet burgers, zesty Thai curries to
          mouthwatering sushi rolls, there is something to tantalize every taste
          bud.
        </p>
        <p className="text-xs text-gray-400 p-5">
          Whether you are craving comforting classics, exotic cuisines, or
          healthy options, we have got you covered. Our curated selection of
          restaurants ensures that every palate finds its perfect match. From
          sizzling pizzas to gourmet burgers, zesty Thai curries to
          mouthwatering sushi rolls, there is something to tantalize every taste
          bud.
        </p>
        <p className="text-xs text-gray-400 p-5">
          Whether you are craving comforting classics, exotic cuisines, or
          healthy options, we have got you covered. Our curated selection of
          restaurants ensures that every palate finds its perfect match. From
          sizzling pizzas to gourmet burgers, zesty Thai curries to
          mouthwatering sushi rolls, there is something to tantalize every taste
          bud.
        </p>

      </section>
    </>
  );
}
