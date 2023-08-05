import HeartSvg from "./components/HeartSvg";

const Footer = () => {
  return (
    <footer className="footer footer-center p-8 text-base-content w-full">
      <div className="flex justify-center item-center w-full font-marhey text-secondary text-1xl">
        Made with <span><HeartSvg /></span> by <a href="#" target="_blank" className="hover:text-white hover:cursor-pointer hover:underline text-rose-gold">AJ.</a> Don&apos;t forget to <a href="#" target="_blank" className="hover:text-white hover:cursor-pointer hover:underline text-rose-gold">RSVP.</a>
      </div>
    </footer>
  );
};

export default Footer;
