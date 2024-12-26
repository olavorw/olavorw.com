import UnifiedSection from '@/components/UnifiedSection';
import EpicCards from '@/components/EpicCards';
import {
  AppWindowIcon,
  BrainCircuit,
  Code,
  Cog,
  Home,
  Mic,
  User,
  Users,
} from 'lucide-react';

export default function AllProjects() {
  return (
    <>
      <UnifiedSection
        title={'Projects'}
        description={
          'These are all of my major projects, as cards! This page is currently under construction. Check back later for updates!'
        }
        centered={true}
        tagline={'All Projects'}
      />
      <EpicCards
        cards={[
          {
            title: '4934',
            description:
              '4934, a transparent, open source, friendly community organization for makers.',
            icon: <Users />,
            linkText: 'Project Page',
            linkHref: 'https://olavorw.com/projects/4934',
            dropdownText: 'About this project',
          },
          {
            title: 'AutoHome',
            description:
              'AutoHome, an AI to control your home, an automation system for the modern age.',
            icon: <Home />,
            linkText: 'Project Page',
            linkHref: 'https://olavorw.com/projects/autohome',
            dropdownText: 'About AutoHome',
            features: [
              {
                feature: 'OpenAI',
                featureDescription: 'GPT models control your home.',
                featureIcon: <BrainCircuit />,
              },
              {
                feature: 'Conversational',
                featureDescription: 'Talk to your friend.',
                featureIcon: <Mic />,
              },
              {
                feature: 'Smart',
                featureDescription: 'Unlimited Integration.',
                featureIcon: <Cog />,
              },
              {
                feature: 'ElevenLabs',
                featureDescription: 'Insanely speedy, realistic voice.',
                featureIcon: <User />,
              },
              {
                feature: 'Open Source',
                featureDescription: 'Completely open source.',
                featureIcon: <Code />,
              },
            ],
          },
          {
            title: '4934.tech',
            description:
              'The official website for the 4934 community organization.',
            icon: <AppWindowIcon />,
            linkText: 'Project Page',
            linkHref: 'https://4934.tech',
            dropdownText: 'About 4934.tech',
          },
        ]}
      />
    </>
  );
}
