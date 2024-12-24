import UnifiedSection from '@/components/UnifiedSection';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <>
      <UnifiedSection
        centered={true}
        title={'Contact Me'}
        description={
          "I'd love to hear from you! If the form doesn't seem to work, email me at olav@olavorw.com"
        }
      />
      <ContactForm />
    </>
  );
}
