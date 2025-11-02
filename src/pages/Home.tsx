import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Services from "@/components/home/Services";
import BeforeAfter from "@/components/home/BeforeAfter";
import Reviews from "@/components/home/Reviews";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";

const Home = () => {
  return (
    <main>
      <Hero />
      <Story />
      <Services />
      <BeforeAfter />
      <Reviews />
      <Process />
      <CTA />
    </main>
  );
};

export default Home;
