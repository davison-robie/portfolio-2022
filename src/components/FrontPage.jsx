import { React, Fragment } from "react";
import { NavLink } from "react-router-dom";

import "../Sass/App.scss";

function FrontPage() {
  return (
    <Fragment>
      <div className="aboveFold">
        <h3>I'm a full stack web developer and creative problem solver.</h3>
        <p>
          People love my adaptability, active listening, and time management
          skills. I am proud to be a lifelong learner.
        </p>
      </div>

      <div className="cardDeck">
        <NavLink className="card card--1" to={"/uie"}>
          <h2>CC-UIE</h2>
          <p>
            Technical design and management of a complex internet marketing
            strategy
          </p>
        </NavLink>

        <NavLink className="card card--2" to={"/adair-staging"}>
          <h2>Adair Staging</h2>
          <p>
            Custom WordPress theme presents a beautiful interior design
            portfolio
          </p>
        </NavLink>

        <NavLink className="card card--3" to={"/hcfa"}>
          <h2>HCFA</h2>
          <p>
            WordPress site with custom theme demonstrates multiple advanced
            techniques
          </p>
        </NavLink>

        <NavLink className="card card--4" to={"/firelogger"}>
          <h2>FireLogger</h2>
          <p>
            React web app allows users to store information about their
            valuables insured under their homeowners insurance policy
          </p>
        </NavLink>

        <NavLink className="card card--5" to={"/nice-boy-vice"}>
          <h2>Nice Boy Vice</h2>
          <p>
            Musical group website with contact form and links to external media
          </p>
        </NavLink>

        <NavLink className="card card--6" to={"/max-allen-music"}>
          <h2>Max Allen Music</h2>
          <p>
            WordPress site for musical group with blog, contact, and links to
            external media
          </p>
        </NavLink>
      </div>
    </Fragment>
  );
}

export default FrontPage;
