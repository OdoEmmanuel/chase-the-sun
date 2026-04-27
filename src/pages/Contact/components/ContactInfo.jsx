import { Phone, MessageSquare, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="pb-24 px-6 bg-white">
      <div className="max-w-xl mx-auto space-y-12 text-black">
        
        <div className="flex flex-col space-y-3">
          <Phone size={24} strokeWidth={1.5} className="mb-2" />
          <h3 className="text-lg font-medium">Call Us</h3>
          <p>We are available by phone from Monday to Saturday, 9am - 6pm Lagos Time.</p>
          <div className="pt-2  space-y-1">
            <p>Services are offered in English.</p>
            <p>+234 808 143 6190 (Whatsapp Only)</p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <MessageSquare size={24} strokeWidth={1.5} className="mb-2" />
          <h3 className="text-lg font-medium">Message Us</h3>
          <p>We are available on Whatsapp from Monday to Saturday, 9am - 6pm Lagos Time.</p>
          <div className="pt-2  space-y-1">
            <p>Services are offered in English.</p>
            <p>+234 808 143 6190 (Whatsapp Only)</p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <Mail size={24} strokeWidth={1.5} className="mb-2 " />
          <h3 className="text-lg font-medium">Email Us</h3>
          <p>We are available via email from Monday to Saturday, 9am - 6pm Lagos Time.</p>
          <div className="pt-2 ">
            <p>waakicreative@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;