import HomeHero from "@/features/HomeHero/components";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import UnifiedSection from "@/components/UnifiedSection";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

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
            <ContactForm/>
            <UnifiedSection
                title={"Unified Section"}
                description={"This is my super duper awesome Unified Section component! It's so cool, you won't believe it!"}
                content={"That above was the description, now this is the content."}
                boldTitle={true}
                features={[
                    {
                        icon: <ArrowRightIcon />,
                        title: "Feature 1",
                        description: "This is the first feature"
                    },
                    {
                        icon: <ArrowRightIcon />,
                        title: "Feature 2",
                        description: "This is the second feature"
                    }
                ]}
                imageSrc={"https://4934.tech/Screenshots/PythonVSCode.png"}/>
      </>
  );
}
