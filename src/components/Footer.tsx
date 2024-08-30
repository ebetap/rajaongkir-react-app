import React from "react";
import { Link, useLocation } from "react-router-dom";

interface FooterProps {
  blackListPath?: string[];
}

const Footer: React.FC<FooterProps> = ({ blackListPath }) => {
  const { pathname } = useLocation();
  const isBlackListPath = blackListPath && blackListPath.includes(pathname);
  return isBlackListPath ? (
    <></>
  ) : (
    <footer className="pb-6">
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-4">
          <Link to="/">About Us</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
