import UnifiedSection from '@/components/UnifiedSection';
import {
  ArrowUpIcon,
  Cookie,
  FormInputIcon,
  Gavel,
  GlassesIcon,
  HandshakeIcon,
  Mail,
  PlusIcon,
  Settings,
  Trash,
  Usb,
  User,
  X,
} from 'lucide-react';
import { UserGroupIcon } from '@heroicons/react/16/solid';

export default function PrivacyPolicy() {
  return (
    <>
      <UnifiedSection
        title={'Privacy Policy'}
        tagline={'Last updated December 23rd, 2024'}
        description={
          'Welcome to the privacy policy for olavorw.com / Olav "Olavorw" Sharma ("we," "our," "us," "I"). '
        }
        content={
          'We value your privacy and are committed to protecting your personal information. This Privacy Policy' +
          ' explains how we collect, use, and protect your information when you interact with our website and ' +
          'community.\nBy using our website, you agree to the terms of this Privacy Policy. If you do not agree ' +
          'with these terms, please do not use our website.\nIf you have any questions or concerns, please contact' +
          ' me using the form on my website or by emailing me at olav@olavorw.com.'
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
        title={'1. Information We Collect'}
        content={
          'We collect information from you when you visit our website, subscribe to our newsletter, or contact us ' +
          'through our contact form.\nThis information may include the following: name, email address, and any other information' +
          ' you provide to us.\n'
        }
        features={[
          {
            icon: <Cookie />,
            title: 'Usage Data',
            description:
              'General data about how you interact with our website, such as pages visited and time spent, collected via cookies or similar technologies. This data is anonymized and not tied to your identity.',
          },
          {
            icon: <User />,
            title: 'Personal Information',
            description:
              'Information you provide to us, such as your name, email address, and any other information you voluntarily share.',
          },
          {
            icon: <PlusIcon />,
            title: 'Community Contributions',
            description:
              'We Any text, images, or other content you voluntarily share on our forums or discussion boards.',
          },
        ]}
        centered={true}
        topOfPage={false}
      />
      <UnifiedSection
        title={'2. How We Use Your Information'}
        content={
          'We use the information we collect to provide you with the best possible experience on our website and community.\n' +
          'This includes the following:\n'
        }
        features={[
          {
            icon: <UserGroupIcon />,
            title: 'Facilitate Participation',
            description:
              'To allow you to participate in our community, such as posting comments or joining discussions.',
          },
          {
            icon: <ArrowUpIcon />,
            title: 'Improve Our Services',
            description:
              'To analyze usage data and feedback to improve and maintain our website, projects, and community.',
          },
          {
            icon: <Mail />,
            title: 'Send Updates',
            description:
              'To send you updates about our website, community, or other relevant information.',
          },
        ]}
        additionalContent={
          'We do not sell, rent, or share your personal data with third parties for their marketing purposes.'
        }
        centered={true}
        topOfPage={false}
      />
      <UnifiedSection
        title={'3. Data Sharing'}
        centered={true}
        topOfPage={false}
        content={
          'We may share your information with third parties in the following circumstances:\n'
        }
        features={[
          {
            icon: <UserGroupIcon />,
            title: 'Service Providers',
            description:
              'To provide services on our behalf, such as hosting, maintenance, and analytics.',
          },
          {
            icon: <Gavel />,
            title: 'Legal Compliance',
            description:
              'To comply with legal obligations, such as responding to subpoenas or court orders.',
          },
          {
            icon: <HandshakeIcon />,
            title: 'Consent',
            description:
              'With your consent, such as when you request to receive updates or newsletters.',
          },
        ]}
      />
      <UnifiedSection
        title={'4. Cookies and Tracking Technologies'}
        centered={true}
        topOfPage={false}
        content={
          'We use cookies and similar tracking technologies to improve your experience on our' +
          ' website.\nCookies may collect non-identifiable information primarily for authentication,' +
          ' browsing activity, and or personalization. You can adjust your browser settings to refuse cookies' +
          'if you prefer.'
        }
      />
      <UnifiedSection
        title={'5. Data Security'}
        centered={true}
        topOfPage={false}
        content={
          'We implement reasonable technical and organizational measures to protect your data from unauthorized access,' +
          ' loss, or misuse. However, no system is entirely foolproof, and we cannot guarantee complete security.'
        }
      />
      <UnifiedSection
        title={'6. Your Rights'}
        centered={true}
        topOfPage={false}
        content={
          'Depending on your location, you may have rights over your data, including:'
        }
        features={[
          {
            icon: <GlassesIcon />,
            title: 'Access',
            description:
              'Request access to your personal data and information about how it is used.',
          },
          {
            icon: <Settings />,
            title: 'Correction',
            description:
              'Request correction of the personal data we hold about you.',
          },
          {
            icon: <Trash />,
            title: 'Deletion',
            description: 'Request deletion of your personal data.',
          },
          {
            icon: <Gavel />,
            title: 'Objection',
            description: 'Object to the processing of your personal data.',
          },
          {
            icon: <Usb />,
            title: 'Data Portability',
            description:
              'Request the transfer of your personal data to another party.',
          },
          {
            icon: <X />,
            title: 'Restriction',
            description:
              'Request the restriction of processing of your personal data.',
          },
        ]}
        additionalContent={
          'If you would like to exercise these rights, please contact me.'
        }
        links={[
          {
            name: 'Contact Me',
            href: 'https://olavorw.com/contact',
          },
        ]}
      />
      <UnifiedSection
        title={"7. Children's Privacy"}
        centered={true}
        topOfPage={false}
        content={
          'Our website is not intended for children under 13 years of age. We do not knowingly ' +
          'collect personal information from children. If you are a parent or guardian and believe ' +
          'your child has provided us with personal information, please contact me so we can take ' +
          'appropriate action.'
        }
        links={[
          {
            name: 'Contact Me',
            href: 'https://olavorw.com/contact',
          },
        ]}
      />
      <UnifiedSection
        title={'8. Changes to This Privacy Policy'}
        centered={true}
        topOfPage={false}
        content={
          'We reserve the right to update this Privacy Policy at any time. We will notify you of any changes ' +
          'by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically ' +
          'for any changes. Changes are effective when they are posted on this page. I usually also send out a reminder' +
          ' on at least one of my social media channels.'
        }
      />
      <UnifiedSection
        title={'9. Contact Us'}
        centered={true}
        topOfPage={false}
        content={
          'If you have any questions or concerns about this Privacy Policy, please contact me:'
        }
        features={[
          {
            icon: <Mail />,
            title: 'Email',
            description: 'olav@olavorw.com',
          },
          {
            icon: <FormInputIcon />,
            title: 'Contact Form',
            description: 'https://olavorw.com/contact',
          },
        ]}
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
        centered={true}
        topOfPage={false}
        description={'Thank you for being a part of the community!'}
      />
    </>
  );
}
