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
            imageWidth={600}
            imageSource="https://placehold.co/600x400/png"
            description={"This is my super duper awesome CTA component! It's so cool, you won't believe it!"}
            tagline={"Call To Action"}
            buttonText={"Cool Button"}
            buttonLink={"#"}
            />
            <ContactForm/>
            <UnifiedSection
                title={"Unified Section"}
                description={"This is my super duper awesome Unified Section component! It's so cool, you won't believe it!"}
                content={"That above was the description, now this is the content, the content is the most important part of the" +
                    " Unified Section component, it's where you put the most important information."}
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
                    },
                    {
                        icon: <ArrowRightIcon />,
                        title: "Feature 3",
                        description: "This is the third feature"
                    }
                ]}
                additionalContent={"This is the additional content, it's where you put the most important information."}
                finalTitle={"Final Title"}
                finalContent={"This is where you put your final content, I don't usually use this but I can put some footer" +
                    " notes. One being that this is super dynamic and I can remove anything I want, change alignment, and more!"}

                imageSrc={"https://placehold.co/800x600/png"}/>
      </>
  );
}