import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="footer footer-center p-4  border-t-2  pb-10 mt-8 ">
      <aside>
        <p>Copyright © 2024 - All right reserved by Shows-lit </p>
      </aside>
    </footer>
  );
};

export default Footer;
