import React, { useState } from 'react';
import { Button } from './ui/Button';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address (must contain @)';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would send this to a backend
      console.log('Form Data:', formData);
      alert("Thank you for your message! I'll get back to you soon.");
      
      // Clear form
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 overflow-hidden bg-fixed bg-no-repeat min-h-screen flex items-center bg-[url('https://i.ibb.co/CKy7LSN0/UIUX-DESIGNER-GEARLONAH.png')] bg-[length:160%] bg-[position:center_25%] md:bg-[length:100%]"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      {/* Content Container with Padding */}
      <div className="px-4 md:px-8 lg:px-12 relative z-10 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            
            {/* Left: Text Content */}
            <div className="flex flex-col justify-start md:pt-10">
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 text-gray-400">
                Ready when <br/> you are
              </h2>
              <p className="text-lg max-w-md leading-relaxed mb-8 text-gray-300">
                Thank you for exploring my work. I focus on creating natural, inclusive, thoughtful design. If that aligns with what you need, feel free to reach out, I'd love to chat.
              </p>
            </div>

            {/* Right: Form */}
            <div className="glass-card rounded-[2rem] p-6 md:p-10">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                 <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="What is your name?" 
                      className={`bg-transparent border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-lg p-4 text-white placeholder-gray-600 focus:border-brand-green focus:outline-none transition-colors`}
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                 </div>
                 
                 <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Email address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="What is your email?" 
                      className={`bg-transparent border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-lg p-4 text-white placeholder-gray-600 focus:border-brand-green focus:outline-none transition-colors`}
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Phone number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="What is your phone number?" 
                      className={`bg-transparent border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-lg p-4 text-white placeholder-gray-600 focus:border-brand-green focus:outline-none transition-colors`}
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <textarea 
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write message" 
                      className={`bg-transparent border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-lg p-4 text-white placeholder-gray-600 focus:border-brand-green focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                 </div>

                 <Button type="submit" variant="primary" icon className="w-full justify-center mt-4">
                    Start Conversation
                 </Button>
              </form>
            </div>
          </div>
      </div>
    </section>
  );
};