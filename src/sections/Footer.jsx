import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="Nike Logo" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-md">
            Get shoes ready for new term at your nearest Nike store.
            <br />
            Find your perfect size in store.
            <br />
            Get rewards
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white  rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-evenly lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat leading-normal text-base hover:text-slate-gray"
                  >
                    <a className="" href="">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-co max-sm:items-center">
        <div className="flex justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copy right"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copy right all rights reserved.</p>
        </div>
        <p className="font-montserrat ">
          Made by{" "}
          <a
            target="_blank"
            className="font-bold hover:text-slate-gray"
            href="https://www.linkedin.com/in/amar-ghalwash-80aa70277/"
          >
            Ammar Ghalwash
          </a>
          . Under supervision of{" "}
          <a
            target="_blank"
            className="font-bold hover:text-slate-gray"
            href="https://www.linkedin.com/company/javascriptmastery/"
          >
            JavaScript Mastery
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
