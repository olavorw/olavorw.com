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
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."}
            tagline={"Lorem ipsum dolor sit amet"}
            buttonText={"Learn More"}
            buttonLink={"/learn-more"}
            />
            <ContactForm
            />
      </>
  );
}
