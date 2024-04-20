import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <ul className="footer_list">
          <li>
            <a href="/">Udemy Business</a>
          </li>
          <li>
            <a href="/">Teach on Udemy</a>
          </li>
          <li>
            <a href="/">Get the app</a>
          </li>
          <li>
            <a href="/">about us</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">career</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Help and Support</a>
          </li>
          <li>
            <a href="/">Affiliate</a>
          </li>
          <li>
            <a href="/">Inventors</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy policy</a>
          </li>
          <li>
            <a href="/">Cookie sittings</a>
          </li>
          <li>
            <a href="/">Sitemap</a>
          </li>
          <li>
            <a href="/">Accessibility statment</a>
          </li>
        </ul>
      </div>
      <div className="bottom_logo_container">
        <a href="/">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt="Udemy"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
