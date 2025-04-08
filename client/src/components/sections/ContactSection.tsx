import { useState } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();
  const { elementRef: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver();
  const { elementRef: formRef, isIntersecting: isFormVisible } = useIntersectionObserver();
  const { elementRef: infoRef, isIntersecting: isInfoVisible } = useIntersectionObserver();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Show success message
    alert('Your message has been sent. We will contact you soon!');
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#1C2526]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className={`font-montserrat font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
              isTitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            {t('contact.title')}
          </h2>
          <p
            className={`font-montserrat text-xl text-[#1A2B6D] dark:text-[#D3D3D3] transition-all duration-700 delay-300 ${
              isTitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            ref={formRef as React.RefObject<HTMLDivElement>}
            className={`bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-all duration-700 ${
              isFormVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1A2B6D] dark:focus:ring-[#D3D3D3] transition-all"
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1A2B6D] dark:focus:ring-[#D3D3D3] transition-all"
                  required
                />
              </div>
              
              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1A2B6D] dark:focus:ring-[#D3D3D3] transition-all"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1A2B6D] dark:focus:ring-[#D3D3D3] transition-all"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#1A2B6D] hover:bg-[#1A2B6D]/90 text-white font-montserrat font-medium rounded-md transition-all transform hover:scale-105"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
          
          {/* Contact Info and Map */}
          <div
            ref={infoRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 delay-300 ${
              isInfoVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            <div className="mb-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl text-gray-900 dark:text-white mb-6">
                Ostvarimo Kontakt
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#1A2B6D] dark:text-[#D3D3D3] mt-1 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.info.call')}
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      +381 123 456 789
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#1A2B6D] dark:text-[#D3D3D3] mt-1 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.info.email')}
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      info@kuharik-keramika.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#1A2B6D] dark:text-[#D3D3D3] mt-1 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.info.address')}
                    </p>
                    <p className="text-gray-800 dark:text-white">
                      123 Novi Beograd, Serbia
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-4">
                <a 
                  href="#" 
                  className="text-[#1A2B6D] dark:text-[#D3D3D3] hover:text-[#1A2B6D]/80 dark:hover:text-[#D3D3D3]/80 text-2xl transition-all"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 fill-current">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-[#1A2B6D] dark:text-[#D3D3D3] hover:text-[#1A2B6D]/80 dark:hover:text-[#D3D3D3]/80 text-2xl transition-all"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-[#1A2B6D] dark:text-[#D3D3D3] hover:text-[#1A2B6D]/80 dark:hover:text-[#D3D3D3]/80 text-2xl transition-all"
                  aria-label="Pinterest"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5 h-5 fill-current">
                    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.35491631714!2d20.282514621990312!3d44.81524921591187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade%2C%20Serbia!5e0!3m2!1sen!2sus!4v1675879879954!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Belgrade, Serbia"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
