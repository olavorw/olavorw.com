import UnifiedSection from '@/components/UnifiedSection';
import {
  ConstructionIcon,
  Gavel,
  HeartHandshakeIcon,
  ShieldCheck,
} from 'lucide-react';

export default function TermsOfService() {
  return (
    <>
      <UnifiedSection
        title={'Terms of Service'}
        tagline={'Last updated December 23rd, 2024'}
        description={
          'Welcome to the terms of service for olavorw.com / Olav "Olavorw" Sharma ("we," "our," "us," "I"). '
        }
        content={
          'Below, you will find the terms of service for using our website and services. By using our website, ' +
          'you agree to these terms. If you do not agree with these terms, please do not use our website.\nIf you ' +
          'have any questions or concerns, please contact me using the form on my website or by emailing me at ' +
          'olav@olavorw.com.'
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
        title={'1. Acceptance of Terms'}
        topOfPage={false}
        centered={true}
        content={
          'By using our services, you confirm that you are at least 13 years old and have the legal capacity' +
          ' to enter this agreement. If you ar under 18, you agree to use our services only under the supervision' +
          ' of a parent or guardian. With that being said, by using our services, ' +
          'you agree to the terms of service outlined in this document. If you do not agree' +
          ' with these terms, please do not use our services.\n' +
          'We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the' +
          ' services after any changes indicates your acceptance of the updated terms.'
        }
      />
      <UnifiedSection
        title={'2. Community Guidelines'}
        content={
          'Our community is built on respect and collaboration. When participating in discussions, contributing content, or engaging with other users, you agree to:'
        }
        features={[
          {
            title: 'Be Respectful',
            description:
              'Be respectful and courteous to other users. Do not engage in personal attacks, hate speech, or harassment.',
            icon: <HeartHandshakeIcon />,
          },
          {
            title: 'Contribute Constructively',
            description:
              'Contribute constructively to discussions. Avoid spam, off-topic content, or low-quality contributions.',
            icon: <ConstructionIcon />,
          },
          {
            title: 'Safe Content',
            description:
              'Do not share content that is harmful, offensive, or inappropriate. This includes adult content, violence, or hate speech.',
            icon: <ShieldCheck />,
          },
          {
            title: 'Follow the Law',
            description:
              'Do not engage in illegal activities, share illegal content, or violate the rights of others.',
            icon: <Gavel />,
          },
        ]}
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'3. Intellectual Property'}
        content={
          'All content on our website and projects, including text, images, graphics, logos, and software, is the property of Olav "Olavorw"' +
          ' Sharma or its content suppliers and is protected by international copyright laws.\n For detailed information, visit the copyright policy.'
        }
        topOfPage={false}
        centered={true}
        links={[
          {
            name: 'Copyright Policy',
            href: 'https://olavorw.com/legal/policies/copyright',
          },
        ]}
      />
      <UnifiedSection
        title={'4. User Accounts'}
        content={
          'To access certain features of our website, you may be required to create a user account. You agree to provide' +
          ' accurate and complete information when creating an account.\nYou are responsible for maintaining the security' +
          ' of your account and password. You agree to notify us immediately of any unauthorized use of your account.' +
          '\nWe reserve the right to suspend or terminate your account at any time for any reason.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'5. Disclaimer of Warranties'}
        content={
          'Our services are provided "as is" and "as available" without any warranties of any kind, express or implied.' +
          ' We do not guarantee the accuracy, completeness, or timeliness of our services.\nWe are not responsible for any' +
          ' errors, omissions, or inaccuracies in our services.\nYour use of our services is at your own risk.\nThis applies' +
          ' to projects by Olavorw, including 4934.tech.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'6. Limitation of Liability'}
        content={
          'In no event shall Olav "Olavorw" Sharma, nor 4934.tech (4934 Tech) (4934), or its suppliers be liable for any damages arising out of the use or inability to use' +
          ' our services.' +
          ' This includes but is not limited to direct, indirect, incidental, special, or consequential damages.\nThis applies to projects by Olavorw, including 4934.tech.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'7. Third-Party Links'}
        content={
          'Our services may contain links to third-party websites or services that are not owned or controlled by Olav "Olavorw" Sharma.\n' +
          ' We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.' +
          '\nYou further acknowledge and agree that Olav "Olavorw" Sharma shall not be responsible or liable, directly or indirectly, for any damage or loss caused' +
          ' or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'8. Termination'}
        content={
          'We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.' +
          '\nUpon termination, your right to use the services will immediately cease. If you wish to terminate your account, you may simply discontinue using the services.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'9. Changes to this Policy'}
        content={
          'We reserve the right to update or modify these terms at any time without prior notice. Changes to these terms will be reflected on this page.' +
          ' Please review this page periodically for any changes.\n' +
          ' By using our services, you agree to the terms outlined in this policy.\nWhen updating these policies, I usually send out a quick reminder on one of my social platforms.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'10. Governing Law'}
        content={
          'These terms are governed by and construed in accordance with the laws of the United States of America and the State of California.' +
          '\nYou agree to submit to the exclusive jurisdiction of the courts located in the State of California for any dispute arising under these terms.'
        }
        topOfPage={false}
        centered={true}
      />
      <UnifiedSection
        title={'11. Contact Us'}
        content={
          'If you have any questions or concerns about these terms, please contact me using the form on my website or by emailing me at olav@olavorw.com.'
        }
        topOfPage={false}
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
    </>
  );
}
