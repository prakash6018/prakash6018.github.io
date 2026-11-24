import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

type TForm = { name: string; email: string; message: string };

const INITIAL_STATE: TForm = { name: '', email: '', message: '' };

const links = [
  { label: 'Email', value: config.html.email, href: `mailto:${config.html.email}` },
  {
    label: 'Phone',
    value: config.html.phone,
    href: `tel:${config.html.phone.replace(/\s/g, '')}`,
  },
  { label: 'LinkedIn', value: 'Connect with me', href: config.html.linkedin },
  { label: 'GitHub', value: 'github.com/prakash6018', href: config.html.github },
];

const Contact = () => {
  const [form, setForm] = useState<TForm>(INITIAL_STATE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // No backend: the form opens the visitor's email app with the message filled in.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${config.html.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="bg-tertiary rounded-lg px-4 py-3 hover:ring-1 hover:ring-[#915EFF]"
            >
              <span className="text-secondary block text-[12px] uppercase tracking-wider">
                {link.label}
              </span>
              <span className="break-all text-[14px] font-medium text-white">{link.value}</span>
            </a>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
          {(Object.keys(config.contact.form) as (keyof TForm)[]).map(input => {
            const { span, placeholder } = config.contact.form[input];
            const className =
              'bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none';

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                {input === 'message' ? (
                  <textarea
                    name={input}
                    rows={7}
                    required
                    value={form[input]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={className}
                  />
                ) : (
                  <input
                    type={input === 'email' ? 'email' : 'text'}
                    name={input}
                    required
                    value={form[input]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={className}
                  />
                )}
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            Send
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
