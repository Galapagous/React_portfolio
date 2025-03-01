// import ContactInput from './molecule/contact.molecule'

// const Contact= () => {
//   return (
//     <section id='project' className={`sm:px-28 px-10 bg-[#243642] sm:h-[100vh] h-auto w-[100vw] py-10`}>
//         <h1 className='font-extralight text-4xl uppercase text-center text-white mb-5'>Contact</h1>

//         {/* form */}
//         <form className='flex flex-col items-start justify-start gap-5' action="">
//             <ContactInput title='Your Name' required={true} placeholder='Austin Kleon'/>
//             <ContactInput title='Company Name' required={false} placeholder='Galapagous'/>
//             <ContactInput title='Your Email' required={true} placeholder='waqas@galapagous.com'/>
//             <div className='text-white flex flex-col items-start justify-start'>
//                 <label className='text-xl uppercase font-thin' htmlFor="message">Your Message</label>
//                 <textarea className='p-2 bg-inherit border-b-2 outline-none text-lg font-thin w-[400px]' placeholder='Your Message'/>
//             </div>
//             <button className='text-lg font-thin hover:bg-white hover:text-[#243642] px-8 py-2 border-[1px] border-white text-white'>Send</button>
//         </form>
//     </section>
//   )
// }

// export default Contact

// ------- version 2 ---------
import React, { useState } from 'react';
import { FiSend, FiUser, FiMail, FiBriefcase } from 'react-icons/fi';
import { sendEmail } from '../service/email';

const ContactInput = ({ title, required, placeholder, icon, type = 'text', value, onChange, name }) => (
  <div className="w-full mb-6">
    <label className="flex items-center gap-2 text-white text-sm font-medium uppercase tracking-wider mb-2">
      {icon} {title} {required && <span className="text-rose-400">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      name={name}
      className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none p-2 text-white transition-all duration-300 placeholder:text-white/50"
    />
  </div>
);

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('target -->', e.target)
    setIsSubmitting(true);
    try {
      sendEmail(e.target);
      setSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a2a36] to-[#243642] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute bottom-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-xl"></div>
      </div>

      <div className="w-full max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-light uppercase text-white mb-4">Get in Touch</h2>
          <p className="text-white/70 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out using the form below.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
              <FiSend className="text-2xl text-green-400" />
            </div>
            <h3 className="text-2xl font-medium text-white mb-2">Message Sent!</h3>
            <p className="text-white/70">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-3 bg-white text-[#243642] px-4 py-2 rounded-md transition-all duration-300 hover:bg-opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <ContactInput 
                title="Your Name" required={true} placeholder="John Doe" icon={<FiUser />}
                value={formState.name} onChange={handleChange('name')}
                name={'name'}
              />
              <ContactInput 
                title="Company Name" required={false} placeholder="Acme Inc." icon={<FiBriefcase />}
                value={formState.company} onChange={handleChange('company')}
                name={'company'}
              />
            </div>

            <ContactInput 
              title="Your Email" required={true} placeholder="john@example.com" type="email" icon={<FiMail />}
              value={formState.email} onChange={handleChange('email')}
              name={'from'}
            />

            <div className="w-full mb-6">
              <label className="flex items-center gap-2 text-white text-sm font-medium uppercase tracking-wider mb-2">
                <FiSend /> Your Message <span className="text-rose-400">*</span>
              </label>
              <textarea 
                name='message'
                className="w-full min-h-32 bg-transparent border-2 border-white/30 focus:border-white rounded-md outline-none p-3 text-white transition-all duration-300 placeholder:text-white/50 resize-y"
                placeholder="Tell me about your project or inquiry..."
                required value={formState.message} onChange={handleChange('message')}
              />
            </div>

            <div className="flex justify-end">
              <button 
                type="submit" disabled={isSubmitting}
                className="group relative flex items-center gap-2 font-medium px-8 py-3 bg-white text-[#243642] rounded-md overflow-hidden transition-all duration-300 hover:bg-opacity-90 disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <FiSend className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
