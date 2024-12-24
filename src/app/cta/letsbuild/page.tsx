import UnifiedSection from '@/components/UnifiedSection';
import { Code, Hammer, LucideHeartHandshake, Users } from 'lucide-react';

export default function LetsBuild() {
  return (
    <>
      <UnifiedSection
        title={"We're Building The Future"}
        tagline={"Let's build our own future"}
        description={
          'I’m always looking for new opportunities to collaborate, learn, and grow. If you have an idea, project,' +
          ' or opportunity you’d like to discuss, I’d love to hear from you!'
        }
        content={
          'Let’s build something amazing together! I love everything from hardware to software, and everything in between!' +
          "\nI'd like to make new friends on the way, and I will change the world with you! I'm a pioneer of the future," +
          "starting with open-source projects, and I'd love to see you there!\nEven if it's a small, or 'stupid' project," +
          "I'd love to work on it. If it's something cool, like an AI cat picture generator, I'm here for it. I'd love to get" +
          'involved with some cool stuff like that.\nI love the open-source community, and I want to give back to it. I want to' +
          ' get involved with as many projects as I can to change the world for the better. Quite an ambitious goal, but I will' +
          ' accomplish it!\nKeep reading to learn more about how we can work together to build a better future for us, controlled' +
          ' by the community!'
        }
        links={[
          {
            name: 'Contact Me',
            href: 'https://olavorw.com/contact',
          },
          {
            name: '4934 Maker Community',
            href: 'https://4934.tech',
          },
          {
            name: 'GitHub',
            href: 'https://github.com/olavorw',
          },
        ]}
        imageSrc={'/Stock/EpicCyberSystems.webp'}
        imageAlt={'Epic Cyber Systems'}
      />
      <UnifiedSection
        centered={true}
        title={'Got ideas? Let’s build!'}
        content={
          "I’m available for freelance work, partnerships, and more. Let’s build something amazing together!\nI'm " +
          "pretty much just a hobbyist, and love to work on projects that I'm passionate about. If you have a project" +
          " that you think I'd be interested in, please reach out!\nIf you've got hardware, software, or something in" +
          ' between, feel free to reach out, don’t wait!'
        }
        topOfPage={false}
      />
      <UnifiedSection
        centered={true}
        title={'Contributing to Open Source'}
        content={
          'I’m a huge advocate for open-source software and love to contribute to projects that make a difference.' +
          ' If you have an open-source project that could use some help, I’d love to hear from you!\n If you wanna' +
          ' help me out, then feel free to check out my GitHub and contribute to my projects!'
        }
        topOfPage={false}
      />
      <UnifiedSection
        centered={true}
        title={'Join the 4934 Maker Community'}
        content={
          'The 4934 Maker Community is a group of makers, creators, and builders who are passionate about technology,' +
          ' innovation, and collaboration. If you’re interested in joining the community, check out our website and' +
          ' get involved today!'
        }
        features={[
          {
            title: 'A Community of Makers',
            description:
              'Join a community of like-minded individuals who are passionate about technology, innovation, and collaboration.',
            icon: <Hammer />,
          },
          {
            title: 'Open Source Projects',
            description:
              'Contribute to open-source projects, collaborate with other makers, and build something amazing together.',
            icon: <Code />,
          },
          {
            title: 'A friendly and welcoming community',
            description:
              'Participate in weekly events, workshops, and challenges to learn new skills, connect with others, and have fun!',
            icon: <LucideHeartHandshake />,
          },
          {
            title: 'Community-driven',
            description:
              'The 4934 Maker Community is run by the community, for the community. Get involved and help shape the future!',
            icon: <Users />,
          },
        ]}
        links={[
          {
            name: '4934 Website',
            href: 'https://4934.tech',
          },
          {
            name: 'GitHub',
            href: 'https://github.com/4934tech',
          },
        ]}
        additionalContent={
          "It’s completely open source, and run by the community! I'd love to see you there! Hopefully we can build something to change the world!"
        }
        topOfPage={false}
      />
      <UnifiedSection
        centered={true}
        title={'Let’s Change The World!'}
        content={
          'Together, we can build a better future. If you have an idea, project, or opportunity you’d like to discuss,' +
          ' I’d love to hear from you! Let’s build something amazing together!'
        }
        topOfPage={false}
        links={[
          {
            name: 'Contact Me',
            href: 'https://olavorw.com/contact',
          },
          {
            name: 'GitHub',
            href: 'https://github.com/olavorw',
          },
        ]}
      />
    </>
  );
}
