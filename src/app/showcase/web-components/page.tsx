import { ArrowRightIcon } from '@heroicons/react/24/outline';
import UnifiedSection from '@/components/UnifiedSection';
import Banner from '@/components/Banner';

export default function webComponents() {
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
          'them by looking at the top or bottom of the page anyways.'
        }
        finalTitle={'Licensing'}
        finalContent={
          'All of my web components are licensed under the terms in my copyright page linked below. More' +
          ' broadly, I chose to license my works under the Apache 2.0 for attribution and it being a good license.\n' +
          " Note that I don't usually give a fuss about giving credit, but these web components are near and dear to" +
          " my heart, so please give attribution under license rules and the copyright. If you're wondering, I usually" +
          ' license under the GNU General Public License (GPLv3). \n With all that said, enjoy the showcase!'
        }
        imageSrc={'https://placehold.co/800x600/png'}
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
        topOfPage={false}
        rightAligned={true}
        title={'Banner'}
        tagline={'Web Component'}
        description={'A banner component to display important information'}
      />
      <Banner
        mainTitle={"Olav's wonderful website."}
        subtitle={'I\'m Olav "Olavorw" Sharma. I do cool nerdy stuff. '}
        buttonText={'About Me'}
        buttonHref={'https://olavorw.com/about'}
        showCased={true}
      />
    </>
  );
}
