import UnifiedSection from '@/components/UnifiedSection';
import EpicCards from '@/components/EpicCards';
import { AppWindowIcon, Home, Users } from 'lucide-react';

export default function AllProjects() {
  return (
    <>
      <UnifiedSection
        title={'Projects'}
        description={'These are all of my major projects, as cards!'}
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
          },
          {
            title: 'AutoHome',
            description:
              'AutoHome, an AI to control your home, an automation system for the modern age.',
            icon: <Home />,
            linkText: 'Project Page',
            linkHref: 'https://olavorw.com/projects/autohome',
          },
          {
            title: '4934.tech',
            description:
              'The official website for the 4934 community organization.',
            icon: <AppWindowIcon />,
          },
        ]}
      />
    </>
  );
}
