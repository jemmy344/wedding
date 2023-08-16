import { siteMetadata } from "@/data/siteMetadata";
import HeartSvg from "./components/HeartSvg";

const Footer = () => {
  return (
    <footer className="footer footer-center p-8 text-base-content w-full">
      <div className="flex justify-center item-center w-full font-marhey
       text-secondary text-1xl">
        Made with <span><HeartSvg /></span> by <a href="https://www.google.com/search?q=Jemida&stick=H4sIAAAAAAAA_-NgU1I1qLCwNDG0NDZJS0kyNE5LtEyyMqgwTEq0NE21NE-1MDRNSUo0WsTK5pWam5mSCACpy2kiMgAAAA&hl=en&mat=CXPnlmjqTO0zElcBeenfiEzIAGfXpEyehwKPNzoikBXeURjEGbeopqR5AZfIOMhMuzluKg5uNg7ApwwLqCsGxRsgIyWXbjpouhsf2WjinXVmGvWYVowYAHs49XxBRYsyZeo&authuser=0" target="_blank"
          className="hover:text-white hover:cursor-pointer hover:underline
          text-rose-gold">Jemida.</a> Don&apos;t forget to
        <a href={`mailto:${siteMetadata.couplesDetails.contactEmail}`}
          target="_blank" className="hover:text-white hover:cursor-pointer
           hover:underline text-rose-gold">RSVP.</a>
      </div>
    </footer>
  );
};

export default Footer;
