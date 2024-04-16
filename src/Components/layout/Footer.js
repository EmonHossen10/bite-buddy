import Image from "next/image";
import React from "react";
import footer from '/public/asset/footer.png'


const Footer = () => {
  return (
    <div>
      <footer className="footer py-16 px-10 bg-gradient-to-r from-[#FFF3EB] to-[#FFE8E6]   text-base-content">
        <aside>
          <Image src={footer} alt="pic" className="w-[300px]"></Image>
          <p className="ml-6">
          <span className="font-semibold text-xl"> BiteBuddy restaurant Ltd.</span>
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title  text-xl">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
