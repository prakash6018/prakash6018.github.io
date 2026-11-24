import { config } from '../../constants/config';

const Footer = () => (
  <footer className="border-t border-white/10 px-6 py-8 text-center sm:px-16">
    <p className="text-secondary text-[14px]">
      © {new Date().getFullYear()} {config.html.fullName}
    </p>
    <p className="text-secondary mt-2 text-[12px] leading-[20px] opacity-70">
      Built with React, Three.js and react-three-fiber, based on the MIT-licensed{' '}
      <a
        className="underline"
        href="https://github.com/ladunjexa/reactjs18-3d-portfolio"
        target="_blank"
        rel="noreferrer"
      >
        3D portfolio template
      </a>
      . 3D models: "Gaming Desktop PC" by{' '}
      <a
        className="underline"
        href="https://sketchfab.com/Yolala1232"
        target="_blank"
        rel="noreferrer"
      >
        Yolala1232
      </a>{' '}
      and "Stylized planet" by{' '}
      <a className="underline" href="https://sketchfab.com/cmzw" target="_blank" rel="noreferrer">
        cmzw
      </a>
      , licensed under{' '}
      <a
        className="underline"
        href="http://creativecommons.org/licenses/by/4.0/"
        target="_blank"
        rel="noreferrer"
      >
        CC BY 4.0
      </a>
      .
    </p>
  </footer>
);

export default Footer;
