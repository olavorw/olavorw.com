import UnifiedSection from '@/components/UnifiedSection';

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
            name: 'Contact Me',
            href: 'https://olavorw.com/contact',
          },
        ]}
      />
    </>
  );
}
