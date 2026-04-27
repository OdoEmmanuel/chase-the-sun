import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import NewsletterMinimal from '../../components/shared/NewsletterMinimal';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-white">
      {/* 1. The Form */}
      <ContactForm />

      {/* 2. The Shared Newsletter Component */}
      <div className="border-t border-b border-gray-200">
        <NewsletterMinimal />
      </div>

      {/* 3. The Contact Information */}
      <div className="pt-16">
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;