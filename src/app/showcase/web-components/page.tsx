import { ArrowRightIcon } from '@heroicons/react/24/outline';
import UnifiedSection from '@/components/UnifiedSection';
import Banner from '@/components/Banner';
import ContactForm from '@/components/ContactForm';
import EpicCards from '@/components/EpicCards';
import {
  Angry,
  BicepsFlexedIcon,
  Brain,
  Cog,
  Flower,
  IdCardIcon,
  Mouse,
} from 'lucide-react';

export default function WebComponents() {
  return (
    <>
      <UnifiedSection
        tagline={'Showcase'}
        title={'Web Components'}
        description={"A showcase of my favorite web components I've developed"}
        content={
          "When building my websites, my larger projects being 4934.tech and this website, I've gotten some experience making" +
          ' amazing components.\n' +
          "This page is dedicated to some of the best web components I've ever built! Not all of them are here, but these are the" +
          " ones I'm most proud of. If you want to see the source code, I'll provide a link to the repository with all" +
          ' of my web components below.' +
          '\nWhen I build my components, I keep the following in mind:'
        }
        boldTitle={true}
        features={[
          {
            icon: <ArrowRightIcon />,
            title: 'Functionality',
            description:
              'My components need to be functional. They need to be useful, and need to work.',
          },
          {
            icon: <ArrowRightIcon />,
            title: 'Dynamics',
            description:
              'I build components to be extremely dynamic, like this one.',
          },
          {
            icon: <ArrowRightIcon />,
            title: 'Design',
            description:
              "My components need to look sleek, and beautiful. They're my work of art.",
          },
          {
            icon: <ArrowRightIcon />,
            title: 'Compatibility',
            description:
              'I make sure my components are accessible to all users, no matter the device, browser, or anything else' +
              'They need to work universally.',
          },
        ]}
        additionalContent={
          "Not all components I've made are explicitly displayed on this page, as said before. While I'm extremely happy" +
          " of how the NavBar and Footer components, they're not shown here for the sake of having a more focused showcase, as you can see " +
          'them by looking at the top or bottom of the page anyways.\nAnother thing, I have a lot of components with different styles from' +
          "different projects. I'll split this showcase up into some parts highlighting each style, the main two being olavorw.com and 4934.tech."
        }
        finalTitle={'Licensing'}
        finalContent={
          'All of my web components are licensed under the terms in my copyright page linked below. More' +
          ' broadly, I chose to license my works under the Apache 2.0 for attribution and it being a good license.\n' +
          " Note that I don't usually give a fuss about giving credit, but these web components are near and dear to" +
          " my heart, so please give attribution under license rules and the copyright. If you're wondering, I usually" +
          ' license under the GNU General Public License (GPLv3). \n With all that said, enjoy the showcase!'
        }
        imageSrc={'/Screenshots/4934TechWebsite.png'}
        links={[
          {
            name: 'Component Repository',
            href: 'https://github.com/olavorw/component-repository',
          },

          {
            name: 'Documentation',
            href: 'https://olavorw.com/docs',
          },
          {
            name: 'Copyright',
            href: 'https://olavorw.com/',
          },
        ]}
      />
      <UnifiedSection
        tagline={'Style 1'}
        title={'olavorw.com Style'}
        content={
          'The components on this page are styled to match the style of my website, olavorw.com. I use a dark theme' +
          ' with a purple accent color, and I use a lot of rounded corners and shadows. I also use a lot of gradients' +
          ' and blur effects to make the components look sleek and modern. Lots of animations as well'
        }
        centered={true}
        topOfPage={false}
      />
      <UnifiedSection
        topOfPage={false}
        rightAligned={true}
        title={'Banner'}
        description={'A banner component to display important information'}
        content={
          'Made with care, this banner component is great for cookie banners, announcements, and more.'
        }
      />
      <Banner
        mainTitle={"Olav's wonderful website."}
        subtitle={'I\'m Olav "Olavorw" Sharma. I do cool nerdy stuff. '}
        buttonText={'About Me'}
        buttonHref={'https://olavorw.com/aboutme'}
        showCased={true}
      />
      <UnifiedSection
        topOfPage={false}
        rightAligned={true}
        title={'Contact Form'}
        description={'A contact form component to get in touch with me'}
        content={
          "This contact form doesn't actually work," +
          'along with the others on this website, because Cloudflare handles it extremely poorly.' +
          " So, if you want to get in touch with me, you've gotta email me at olav@olavorw.com."
        }
      />
      <ContactForm />
      <UnifiedSection
        topOfPage={false}
        rightAligned={true}
        title={'Epic Cards'}
        description={'Yeah, I called them epic cards. They are pretty epic.'}
        content={
          "These are some extremely stylish cards with a lot of functionality. They're designed to be" +
          ' sleek and modern, with a lot of gradients and blur effects. Like most of this style They have a lot of dynamic features' +
          ' like dropdowns and animations. They are also very functional, with a lot of information and links.'
        }
      />
      <EpicCards
        cards={[
          {
            title: 'Wow!',
            description:
              'This is a really cool card. It has a lot of features and looks amazing. I love it!',
            linkText: 'Cool Website',
            icon: <IdCardIcon />,
            dropdownText: 'Click this thingy!',
            linkHref: 'https://olavorw.com',
            features: [
              {
                feature: 'Dynamic',
                featureDescription: 'This whole card is dynamic.',
                featureIcon: <BicepsFlexedIcon />,
              },
              {
                feature: 'Icons',
                featureDescription: 'Supports dynamic icons!',
                featureIcon: <Brain />,
              },
              {
                feature: 'Beautiful',
                featureDescription: 'This card is beautiful.',
                featureIcon: <Flower />,
              },
            ],
          },
          {
            title: 'Amazing!',
            description:
              'This is another really cool card. It has a lot of features and looks amazing. I love it! Whoa, the last one had an icon but this one does not!',
            linkText: 'Shh!',
            icon: '',
            dropdownText: 'Whoa!',
            linkHref: 'https://olavorw.com',
            features: [
              {
                feature: 'Hover',
                featureDescription: 'Hover over this text..',
                featureIcon: <Mouse />,
              },
              {
                feature: '',
                featureDescription: 'Again, no stuff because dynamic!',
                featureIcon: <Brain />,
              },
              {
                feature: 'No icon',
                featureDescription: 'I just chose for no icon.',
              },
              {
                feature: 'Beautiful',
                featureDescription: 'This card is beautiful. (again)',
                featureIcon: <Flower />,
              },
            ],
          },
          {
            title: 'Card?',
            description:
              'This is the last card. It has a lot of features and looks amazing. I love it!',
            icon: 'Bet you thought there was an icon!',
            dropdownText: 'Click this thingy!',
            features: [
              {
                feature: 'rah',
                featureDescription: 'Bet you thought there would be a link!',
                featureIcon: <Angry />,
              },
              {
                feature: '',
                featureDescription: 'Nothing on the left side!',
              },
              {
                feature: 'Nothing on the right side!',
                featureDescription: '',
                featureIcon: <Cog />,
              },
            ],
          },
        ]}
      />
    </>
  );
}
