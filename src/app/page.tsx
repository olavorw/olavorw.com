import HomeHero from '@/features/HomeHero/components';
import CallToAction from '@/components/CallToAction';
import ContactForm from '../features/ContactForm/components';

export default function Home() {
  return (
    <>
      <HomeHero />
      <CallToAction
        imageHeight={400}
        imageWidth={600}
        imageSource="https://placehold.co/600x400/black/gray/png"
        description={
          "This is my super duper awesome CTA component! It's so cool, you won't believe it!"
        }
        tagline={'Call To Action'}
        buttonText={'Cool Button'}
        buttonLink={'#'}
      />
      <ContactForm />
    </>
  );
}
