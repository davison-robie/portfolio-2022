import { React, Fragment } from "react";

function Footer(props) {
  return (
    <Fragment>
      <footer className="footer">
        <p className="footer__copyright">
          Copyright &copy;{props.year} by Davison Robie.
        </p>
      </footer>
    </Fragment>
  );
}

export default Footer;
