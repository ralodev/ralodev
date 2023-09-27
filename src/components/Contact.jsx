import React from 'react';
import { useEffect, useState } from 'react';
import { BiBot, BiCheckShield } from 'react-icons/bi';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const recaptchaRef = React.createRef();
  const [isValid, setIsValid] = useState(false);

  const onChange = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    setIsValid(recaptchaValue);
  };

  const onSubmit = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
  };
  return (
    <section name="contact" className="body-font relative w-full min-h-screen text-gray-300 pt-[10vh]">
      <div className="flex max-w-[1000px] mx-auto md:px-16 p-4 flex-col justify-center w-full h-full">
        <header className="mb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#60f7d4] mb-5">Contact me</p>
        </header>
        <form onSubmit={onSubmit} action="https://getform.io/f/e69a0dfe-0aa2-403e-abc8-a745cf4fd478" method="POST">
          <div>
            <div className="flex flex-col my-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-3 py-2 rounded-lg bg-[#0000000a] border border-[#ffffff1f] focus:border-teal-500 focus:outline-none  focus:text-gray-100"
                autoComplete="contact_name"
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                className="px-3 py-2 rounded-lg bg-[#0000000a] border border-[#ffffff1f] focus:border-teal-500 focus:outline-none  focus:text-gray-100"
                autoComplete="contact_mail"
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="message">Message</label>
              <textarea
                rows="4"
                id="message"
                name="message"
                className="px-3 py-2 rounded-lg bg-[#0000000a] border border-[#ffffff1f] caret-teal-500 focus:border-teal-500 focus:outline-none  focus:text-gray-100"></textarea>
            </div>
          </div>
          <div className="w-full pt-3 code">
            Although I love robots, I prefer talking to humans. Please prove you are not a bot by checking the box below.
            <ReCAPTCHA ref={recaptchaRef} sitekey="6Lf2JlgoAAAAAApyzcXXK-9WljZW1MgTrTsyKg99" onChange={onChange} theme="light" />
            <button
              type="submit"
              className={
                isValid
                  ? 'group px-4 py-2 mt-4 rounded-md flex justify-center items-center border-2 text-[#60f7d4] border-[#60f7d4] transition-all duration-300 hover:bg-[#60f7d41f]'
                  : 'group px-4 py-2 mt-4 rounded-md flex justify-center items-center border-2 text-gray-500 border-gray-500 transition-all duration-300 hover:text-red-500'
              }
              disabled={!isValid}>
              {isValid ? (
                <>
                <span className="mr-2 code text-xl">
                  Send
                </span>
                  <BiCheckShield size={20} />
                </>
              ) : (
                <>
                <span className="mr-2 code text-xl">
                    Are you a bot?
                </span>
                    <BiBot size={20} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
