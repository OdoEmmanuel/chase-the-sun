import { useState } from 'react';
import Button from '../../../components/ui/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,[e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const API_URL = 'http://localhost:8000/contact.php'; 

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium text-center text-black mb-16">
          Send Us a Message
        </h1>

        {status === 'success' && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 text-center rounded">
            Thank you! Your message has been sent successfully. We will get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 text-center rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-black uppercase tracking-wider">
              Name
            </label>
            <input 
              type="text" 
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Typing"
              className="w-full border text-black border-black px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black transition-shadow disabled:opacity-50"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-black uppercase tracking-wider">
              Email
            </label>
            <input 
              type="email" 
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Typing"
              className="w-full border text-black border-black px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black transition-shadow disabled:opacity-50"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-black uppercase tracking-wider">
              Phone Number
            </label>
            <input 
              type="tel" 
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Typing"
              className="w-full border text-black border-black px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black transition-shadow disabled:opacity-50"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-black uppercase tracking-wider">
              Message
            </label>
            <textarea 
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Typing"
              className="w-full border text-black border-black px-4 py-4 focus:outline-none focus:ring-1 focus:ring-black transition-shadow resize-y disabled:opacity-50"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="pt-4 flex justify-center">
            <Button 
              type="submit" 
              variant="solid-dark" 
              className="w-full md:w-48 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'SENDING...' : 'SEND'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;