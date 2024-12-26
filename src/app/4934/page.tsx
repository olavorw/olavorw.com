import UnifiedSection from '@/components/UnifiedSection';
import { Code, Hammer, LucideHeartHandshake, Users } from 'lucide-react';

export default function _4934() {
  return (
    <UnifiedSection
      title={'4934 Tech'}
      tagline={'Building the future, together.'}
      description={
        '4934, a transparent, open source, friendly community organization for makers.'
      }
      imageSrc={'/4934/4934Square.png'}
      imageAlt={'4934 Logo'}
      content={
        '4934 is a community organization for makers, by makers. We are a group of passionate individuals who are dedicated to building the future, together.' +
        " We are a community of like-minded individuals who are passionate about technology, innovation, and collaboration\nWe're run by the community, and for the community." +
        " We are completely open source, and we'd love to change the world with you! 4934 empowers makers to build amazing things.\n These are the values we hold dear:"
      }
      features={[
        {
          title: 'Open Source',
          description:
            'We are completely open source, and run by the community!',
          icon: <Code />,
        },
        {
          title: 'Innovation',
          description:
            'We are passionate about technology, innovation, and collaboration.',
          icon: <Hammer />,
        },
        {
          title: 'Community',
          description: 'We are a community of makers, by makers.',
          icon: <Users />,
        },
        {
          title: 'Transparency',
          description: 'We are transparent, friendly, and welcoming to all.',
          icon: <LucideHeartHandshake />,
        },
      ]}
      finalTitle={'Join the 4934 Community'}
      finalContent={
        'If you’re interested in joining the community, check out our website and get involved today! We’d love to have you!'
      }
      links={[
        {
          name: '4934 Website',
          href: 'https://4934.tech',
        },
        {
          name: 'GitHub',
          href: 'https://github.com/4934tech',
        },
        {
          name: 'Discord',
          href: 'https://discord.gg/h5FujqRW',
        },
        {
          name: 'Join 4934!',
          href: 'https://4934.tech/contact',
        },
      ]}
    />
  );
}
