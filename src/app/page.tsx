import HomeHero from '@/features/HomeHero/components';
import UnifiedSection from '@/components/UnifiedSection';

export default function Home() {
  return (
    <>
      <HomeHero />
      <UnifiedSection
        title="About"
        description="We are a team of passionate developers and designers that love to build and create amazing things."
        topOfPage={false}
      />
    </>
  );
}
