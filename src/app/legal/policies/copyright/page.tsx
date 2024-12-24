import UnifiedSection from '@/components/UnifiedSection';
import { NewspaperIcon, PaperclipIcon, Scroll } from 'lucide-react';

export default function CopyrightPolicy() {
  return (
    <>
      <UnifiedSection
        title={'Copyright Policy'}
        tagline={'Last updated December 23rd, 2024'}
        description={
          'Welcome to the copyright page for olavorw.com / Olav "Olavorw" Sharma ("we," "our," "us," "I"). '
        }
        content={
          'Below, you will find information regarding the licensing and copyright details for my projects and website. I am ' +
          'committed to transparency and supporting the open-source community.\n If you have any questions or concerns, please ' +
          'contact me using the form on my website or by emailing me at olav@olavorw.com.'
        }
        centered={true}
        links={[
          {
            name: 'Contact Form',
            href: 'https://olavorw.com/contact',
          },
          {
            name: 'Email Me',
            href: 'mailto:olav@olavorw.com',
          },
        ]}
      />
      <UnifiedSection
        title={'1. Open Source Licensing'}
        topOfPage={false}
        centered={true}
        content={
          'Most of my projects are open source and distributed under the GNU General Public License 3 (GPLv3) or Apache License. 2.0' +
          ' You can find the full text of these licenses linked below.\n Each of my projects includes a "License.md" file in the root directory' +
          ' with the full text of the applicable license. You are free to use, modify, and distribute our open-source projects in accordance with ' +
          'the terms of these licenses.\nFiles written by me may include a notice at the top of the file regarding the license associated' +
          ' with it.'
        }
        links={[
          {
            name: 'GNU General Public License 3 (GPLv3)',
            href: 'https://www.gnu.org/licenses/gpl-3.0.html',
          },
          {
            name: 'Apache License 2.0',
            href: 'https://www.apache.org/licenses/LICENSE-2.0',
          },
        ]}
      />
      <UnifiedSection
        title={'2. Attribution'}
        content={
          'Attribution is a core aspect of open-source software. When using or redistributing my projects, please include the following if applicable:\n'
        }
        topOfPage={false}
        centered={true}
        features={[
          {
            icon: <NewspaperIcon />,
            title: 'The original copyright notice',
            description: 'Copyright 2024 Olav "Olavorw" Sharma',
          },
          {
            icon: <PaperclipIcon />,
            title: 'A link to my website',
            description: 'https://olavorw.com',
          },
          {
            icon: <Scroll />,
            title: 'The full text of the applicable license',
            description: 'Apache License 2.0 or other',
          },
        ]}
        additionalContent={
          'Please note that there are lots of exceptions to this, please see the section below.'
        }
      />
      <UnifiedSection
        title={'3. Exceptions'}
        content={
          'As for attribution, while I encourage attribution, it is not explicitly required in the GNU General Public License (GPLv3) which I license' +
          ' most of my projects under, but for the Apache License 2.0 like this website is licensed under, you should definitely include attribution.' +
          '\nSome projects or components may include dependencies or third-party software with their own licensing terms. Please review individual project ' +
          'repositories for any exceptions or additional licensing requirements.\nFor the most accurate information on your rights, please review all applicable' +
          " licenses. \nI'm open to collaboration and partnerships, so don't hesitate to reach out. 90% of the time when you reach out I'll make an" +
          'exception. I just want to know where my work is going.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'4. Use of Content'}
        content={
          "My projects, website and their contents are protected by copyright laws. You may not go further than the restrictions made clear in the respective project's" +
          " license without my explicit permission.\n If you're interested in using our content for commercial purposes or want explicit permission, please contact" +
          ' me to discuss licensing.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={"5. My websites' License Information"}
        description={
          'The following information applies to the content on this website, olavorw.com.'
        }
        content={
          'My websites, including, olavorw.com (this website), and 4934.tech, and its content are fully open source and distributed under the Apache License. 2.0. You can' +
          ' find the full text of the license' +
          " linked below. You are free to use, modify, and distribute my website's content in accordance with the terms of the Apache License 2.0. \n What this means is" +
          " when using my website's content, you must include the attribution stated above.\nWhile most of our website can be made open source, some components may be " +
          'proprietary or have different licensing terms. Please refer to the individual project repositories or contact us for more information.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'6. Individual Project Licensing'}
        content={
          'Some projects may have different licensing terms. Please refer to the individual project repositories for the most accurate information on licensing and use.\n' +
          'If I make documentation for a project, I usually provide more information about the licensing and use of the project.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'7. Contact Information'}
        content={
          'If you have any questions or concerns regarding the licensing or use of my projects, please contact me using the form on my website or by emailing me at ' +
          "olav@olavorw.com\n90% of the time when you reach out I'll make an exception. I just want to know where my work is going."
        }
        topOfPage={false}
        centered={true}
        links={[
          {
            name: 'Contact Form',
            href: 'https://olavorw.com/contact',
          },
          {
            name: 'Email',
            href: 'mailto:olav@olavorw.com',
          },
        ]}
      />
      <UnifiedSection
        title={'8. Changes to this Policy'}
        content={
          'I reserve the right to update or modify this policy at any time. Changes to this policy will be reflected on this page. Please review this page periodically for ' +
          'any changes. By using my projects or website, you agree to the terms outlined in this policy and applicable licenses.\nWhen updating these policies, I usually' +
          ' send out a quick reminder on one of my social platforms.'
        }
        topOfPage={false}
        centered={true}
      />
    </>
  );
}
