import React from "react";
import logo from "../../assets/download (1).jpeg";
import { FaFacebookSquare, FaInstagram, FaShopify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-700  ">
      <div className="footer p-10 bg-zinc-700 text-white ">
      <div>
        <img className="h-20 w-20 rounded-md" src={logo} alt="" />
        <p>
          Baby Car Cruise
          <br />
          Providing reliable tech since 1992
        </p>
        <div className="flex mt-5 gap-3">
          <FaFacebookSquare className="h-6 w-6" />
          <FaShopify className="h-6 w-6" />
          <FaInstagram className="h-6 w-6"></FaInstagram>
        </div>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    
      </div>
      <small className="text-center w-full block pb-5 text-zinc-50">© 2024 All Rights Reserved Baby Car Cruise™️ Unauthorized use prohibited.</small>
    </footer>
  );
};

export default Footer;
