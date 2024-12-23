import HomeHero from "@/features/HomeHero/components";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
      <>
            <HomeHero />
            <CallToAction
            imageHeight={400}
            imageWidth={400}
            imageSource="/images/hero.png"
            description={"This is my super duper awesome CTA component! It's so cool, you won't believe it!"}
            tagline={"Call To Action"}
            buttonText={"Cool Button"}
            buttonLink={"/cool-button"}
            />
            <ContactForm
            />
      </>
  );
}
