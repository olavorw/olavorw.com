import UnifiedSection from '@/components/UnifiedSection';
import { Code, Lock, Pen, Languages } from 'lucide-react';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

export default function AboutMe() {
  return (
    <>
      <UnifiedSection
        centered={true}
        title={"Yo, I'm Olav!"}
        tagline={'About me'}
        description={"I'm a massive software & hardware nerd."}
        content={
          "In more detail, I'm a full stack software nerd, with a passion for hardware, entrepreneurship, and all things tech. " +
          "I'm the founder of 4934 Tech, a community of makers, developers, and entrepreneurs.\nI'm a pioneer of the future, starting with " +
          "open-source projects, and I'd love to see you there! I'm always looking for new opportunities to collaborate, learn, and grow.\n" +
          "That's kind of the main stuff, but \"about me\" is a bit more than that, it's pretty broad. I'm a pretty chill guy, and I love to " +
          'meet new people!\nHey, these are somethings I enjoy doing:'
        }
        features={[
          {
            icon: <Pen />,
            title: 'Calligraphy',
            description: "I love doing calligraphy, it's really satisfying",
          },
          {
            icon: <ComputerDesktopIcon />,
            title: 'PC Building',
            description:
              "I love building computers, it's like LEGO but cooler, it's what got me into tech",
          },
          {
            icon: <Lock />,
            title: 'Pen Testing',
            description:
              'I really enjoy pen testing, it helps me understand how stuff works',
          },
          {
            icon: <Code />,
            title: 'Software Development',
            description:
              'I love developing software, it allows me to create cool stuff, especially malware',
          },
          {
            icon: <Languages />,
            title: '日本語',
            description:
              'Priority right here',
          },
        ]}
        additionalContent={
          'I made this website to host documentation for my projects, and to share my thoughts and ideas with the world.' +
          'Enjoy your stay! Let me know if wanna chat!'
        }
        finalTitle={"Got ideas? Let's build!"}
        finalContent={
          "From the words of ClaraCrazy from CrazyCo, I want to make anything I dream.\n Hey I think it's the slogan for me" +
          ' now that I want to engineer my own future, sounds pretty cool, right? I made a cool' +
          "article on it, check it out! More of a CTA, but it's cool.\nLet's pioneer the open source world and make" +
          "the future! That sounded pretty cool to me, so I'm sticking with it. I'm a pioneer of the future, and I'd" +
          'love to see you there! o/'
        }
        links={[
          {
            name: 'Contact Me',
            href: 'https://olavorw.com/contact',
          },
          {
            name: 'Software Journey',
            href: 'https://olavorw.com/cta/letsbuild',
          },
          {
            name: 'Hardware Endeavors',
            href: 'https://olavorw.com/aboutme/hardwareendeavors',
          },

          {
            name: 'Game Development',
            href: 'https://olavorw.com/aboutme/gamedevelopment',
          },
          {
            name: 'Open Source',
            href: 'https://olavrow.com/aboutme/opensource',
          },
          {
            name: 'Favorite Projects',
            href: 'https://4934.tech',
          },
        ]}
      />
    </>
  );
}
