import { React, Fragment } from "react";
import { NavLink } from "react-router-dom";

function NiceBoyVice() {
  return (
    <Fragment>
      <h2>Nice Boy Vice - A Quick Look</h2>
      <div className="tall-image-wrap">
        <a href="https://niceboyvice.com" target={"blank"}>
          <img
            alt="Nice Boy Vice"
            src="/images/NBV_com-preview_image.png"
            style={{ width: "100%" }}
          ></img>
        </a>
      </div>

      <h2>GOALS FOR THIS PROJECT</h2>
      <p>
        This band site was the first web design project that I ever completed.
        It even predates my development boot camp days. Or even my days of
        aspiring to become a web developer, for that matter. I built it out of
        necessity with help from my bandmate and a hacker’s tenacity.
      </p>
      <p>
        The purpose of the site is to provide links and a contact channel. It is
        simply a static HTML page that replaces a Linktree page or something
        similar. Nothing more. It features a simple signup form and links to the
        current featured music release.
      </p>
      <p>
        It is reasonably responsive and looks simple and clean, not bad for a
        beginner, and I still love it!
      </p>
      <h2>PROJECT LINK:</h2>
      <p>
        <a className="link" href="http://niceboyvice.com/">
          niceboyvice.com
        </a>
      </p>

      <h2>MY FAVORITE FEATURES</h2>
      <h3>
        FEATURE 1 <span className={"after-title"}>- Custom Icons</span>
      </h3>
      <p>
        I used photoshop to change black-and-white stock vector icons to
        white-and-transparent to fit the design. I’ve been learning Photoshop
        basics on a task-by-task basis. While developers are certainly not
        graphic designers, they must be confident with the basics. Graphics and
        content can make or break a developer’s chances of a successful design.
      </p>
      <div className="tall-image-wrap">
        <img
          alt="CC-UIE Marketing - Funnelytics"
          src="/images/NBV-custom-icons.png"
          style={{ width: "100%" }}
        ></img>
      </div>

      <h3>
        FEATURE 2{" "}
        <span className={"after-title"}>- Tasteful Responsive Design</span>
      </h3>
      <p>
        This simple design displays well on all screen sizes. When the cover art
        of the featured release changes, we can also easily change the color
        palette to match the existing album artwork. Users can access most major
        music services from the homepage. In addition, special needs users can
        easily navigate the site.
      </p>

      <h2>LESSONS LEARNED</h2>

      <h3>
        <span className={"after-title"}>The Basics of Web Aesthetics</span>
      </h3>
      <p>
        I had never tried using any coding languages before, so there was quite
        a learning curve to completing the project. Therefore, I relied heavily
        on my coworkers with more experience with markup than I had. I learned
        everything from scratch: what HTML tags and properties were and classes
        and how they interacted with CSS.
      </p>
      <p>
        I learned that web design is all about adaptability. The most beautiful
        creation ever on one device may break on another. I found the required
        flexibility very liberating, as counterintuitive as that sounds. Great
        design for the web is not about sweeping visual statements. Instead,
        it’s about elegance, adaptability, and accessibility.
      </p>
      <p>
        I’ve often told people about my long career in the music industry as if
        that makes me an outlier in the web technologies field. But, on the
        contrary, that makes me more of a cliche than anything else. Or, I
        suppose I could let that make me feel more like I am not alone.
      </p>
      <p>
        I have always desired to be a lifelong learner, and I am happy with
        where that attitude has taken me. Although I don’t take any of my time
        in life for granted, I feel like I am just getting started. Now, I need
        to find the time to update the page!
      </p>

      <NavLink to={"/"}>
        <p className="link">Back</p>
      </NavLink>
    </Fragment>
  );
}

export default NiceBoyVice;
