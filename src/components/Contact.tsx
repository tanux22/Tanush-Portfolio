
import React, { useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import HoloButton from './ui/HoloButton';
import { sendMessage } from '../services/api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(formData);
    setStatus('sent');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  const socials = [
    { icon: 'linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'github', href: '#', label: 'GitHub' },
    { icon: 'discord', href: '#', label: 'Discord' },
    { icon: 'instagram', href: 'https://instagram.com/tanush.root', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-32 px-[8%] relative z-10">
      <SectionHeader number="06" title="ESTABLISH" highlight="COMMS" highlightColor="text-neon-pink" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="font-display text-4xl mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            READY TO COLLABORATE?
          </h3>
          <p className="text-text-muted text-lg mb-8">
            Initiate protocol to start a new mission. Available for freelance and full-time opportunities.
          </p>

          <div className="mb-8 space-y-4">
            <div className="text-lg flex items-center gap-4 text-white">
              <i className="fas fa-envelope text-neon-cyan w-8"></i> 
              atanushreddy@gmail.com
            </div>
            <div className="text-lg flex items-center gap-4 text-white">
              <i className="fas fa-phone text-neon-cyan w-8"></i> 
              +91 8088914656
            </div>
          </div>

          <div className="flex gap-6 mt-8">
            {socials.map((social) => (
                <a 
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/30 flex items-center justify-center text-white text-xl clip-hud hover:bg-neon-cyan hover:text-black hover:border-neon-cyan hover:shadow-[0_0_20px_#00f3ff] transition-all duration-300 group relative"
                    aria-label={social.label}
                >
                    <i className={`fab fa-${social.icon}`}></i>
                    {social.icon === 'instagram' && (
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity font-mono whitespace-nowrap">
                            @tanush.root
                        </span>
                    )}
                </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-12 bg-[rgba(0,243,255,0.03)] border border-[rgba(0,243,255,0.3)] clip-hud relative">
          <div className="absolute bottom-0 right-0 w-[30px] h-[30px] border-b-2 border-r-2 border-neon-cyan"></div>
          
          <div className="mb-8 relative group">
            <input 
              type="text" 
              className="w-full bg-transparent border-none border-b border-[#444] py-4 text-white font-ui text-xl focus:outline-none focus:border-neon-cyan focus:shadow-[0_10px_20px_-10px_rgba(0,243,255,0.1)] transition-all peer" 
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
            <label className={`absolute left-0 top-4 text-[#888] pointer-events-none transition-all duration-300 font-display text-sm tracking-widest ${formData.name ? '-top-4 text-neon-cyan text-xs' : 'peer-focus:-top-4 peer-focus:text-neon-cyan peer-focus:text-xs'}`}>
              CODENAME
            </label>
          </div>

          <div className="mb-8 relative group">
            <input 
              type="email" 
              className="w-full bg-transparent border-none border-b border-[#444] py-4 text-white font-ui text-xl focus:outline-none focus:border-neon-cyan focus:shadow-[0_10px_20px_-10px_rgba(0,243,255,0.1)] transition-all peer" 
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
            <label className={`absolute left-0 top-4 text-[#888] pointer-events-none transition-all duration-300 font-display text-sm tracking-widest ${formData.email ? '-top-4 text-neon-cyan text-xs' : 'peer-focus:-top-4 peer-focus:text-neon-cyan peer-focus:text-xs'}`}>
              FREQUENCY (EMAIL)
            </label>
          </div>

          <div className="mb-8 relative group">
            <input 
              type="text" 
              className="w-full bg-transparent border-none border-b border-[#444] py-4 text-white font-ui text-xl focus:outline-none focus:border-neon-cyan focus:shadow-[0_10px_20px_-10px_rgba(0,243,255,0.1)] transition-all peer" 
              required
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
             <label className={`absolute left-0 top-4 text-[#888] pointer-events-none transition-all duration-300 font-display text-sm tracking-widest ${formData.message ? '-top-4 text-neon-cyan text-xs' : 'peer-focus:-top-4 peer-focus:text-neon-cyan peer-focus:text-xs'}`}>
              TRANSMISSION
            </label>
          </div>

          <HoloButton type="submit" className="w-full mt-4">
            {status === 'sending' ? 'TRANSMITTING...' : status === 'sent' ? 'SENT!' : 'SEND DATA'}
          </HoloButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
