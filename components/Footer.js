
import React from "react";
import { Container, Image } from "react-bootstrap";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import style from "../styles/Footer.module.scss";
function Footer() {
  return (
    <Container className={style.footer} fluid>
      <div >
        <Link href="/">
          <a className={style.footerLink}>Home</a>
        </Link>
        <Link href="/products">
          <a className={style.footerLink}>Products</a>
        </Link>
        <Link href="/blog">
          <a className={style.footerLink}>Blog</a>
        </Link>
        <Link href="/about">
          <a className={style.footerLink}>About</a>
        </Link>
      </div>
      <Image
        src="/assets/top-leader/flipcard.jpeg"
        alt="siteLogo"
        className={style.styledLogo}
      />
      <div>
        <ul className={style.footerAddress}  >
          <li>Nasr City Cairo, Egypt</li>
          <li>Phone numbers: +20100000000</li>
          <li>Email address: support@games.games</li>
        </ul>
      </div>
      <div className=" ml-2 ">
        <a href="" target="_blank">
          <FaLinkedin className={style.social} size="20" />
        </a>
        <a href="" target="_blank">
          <FaFacebookSquare className={style.social} size="20" />
        </a>
        <a href="" target="_blank">
          <FaInstagram className={style.social} size="20" />
        </a>
        <a href="" target="_blank">
          <FaTwitter className={style.social} size="20" />
        </a>
      </div>

      <div className={`${style.copyRight} text-secondary`}>
        <p style={{ color: "#eee" }}> © 2020 Games. All Rights Reserved.</p>
      </div>

      <div className=" ml-2 ">
        <Link href=" ">
          <a className={style.footerTermsCondition}>
            cookie-policy
          </a>
        </Link>
        <Link href=" ">
          <a className={style.footerTermsCondition}>
            terms-of-service
          </a>
        </Link>
        <Link href=" ">
          <a className={style.footerTermsCondition}>
            cookie-policy
          </a>
        </Link>
      </div>
    </Container>
  );
}

export default Footer;
