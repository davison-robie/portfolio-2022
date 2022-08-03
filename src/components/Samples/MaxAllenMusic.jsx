import { React, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { CodeBlock, dracula } from "react-code-blocks";

function MaxAllenMusic() {
  const feature1text = `<div id="custom-footer">
©Copyright <?php echo date(‘Y’); ?> Max Allen Music, LLC & Big Walnut Studios. All Rights Reserved. Don't steal our shit, yo, it's rude.
</div>
`;
  const php = `php`;

  return (
    <Fragment>
      <h2>Max Allen Music (Under Construction!) - A Quick Look</h2>
      <div className="tall-image-wrap">
        <a href="http://maxallenmusic.com" target={"blank"}>
          <img
            alt="Max Allen Music"
            src="/images/MaxAllenMusicScreenshot.png"
            style={{ width: "100%" }}
          ></img>
        </a>
      </div>
      <h2>GOALS FOR THIS PROJECT</h2>
      <p>
        I just recently took over as admin for this website. It was in dire need
        of minor fixes after almost ten years of no updates. My initial mission
        with this site is to work within the existing code base but make some
        much-needed updates. I am fixing or removing broken links and images.
        I’m updating content and drawing expired calls to action. An older
        musical release heavily influences the original site, so I am changing
        the design to something more neutral.
      </p>
      <p>
        The band does not currently have an online store because their former
        3rd party merchandise store page expired. My next goal for this site
        will be to rebuild it completely, including a new online store on the
        site itself.
      </p>

      <h2>PROJECT LINK:</h2>
      <p>
        <a className="link" href="http://maxallenmusic.com">
          maxallenmusic.com
        </a>
      </p>

      <h2>MY FAVORITE FEATURES</h2>
      <h3>
        FEATURE <span className={"after-title"}>- Dynamic Copyright Date</span>
      </h3>
      <p>
        An old copyright date in the footer is a pervasive feature in an
        out-of-date site. Using a WordPress hook or JavaScript function instead
        to render the year dynamically can increase the staying power of the
        design.
      </p>
      <p>Here is an example of Max Allen Music’s footer:</p>
      <div className="my-code-block">
        <CodeBlock
          language={php}
          theme={dracula}
          text={feature1text}
          customStyle={{
            overflowX: "auto",
          }}
        />
      </div>

      <h2>LESSONS LEARNED</h2>
      <h3>
        <span className={"after-title"}>
          Be Open to Other Ways of Doing Things
        </span>
      </h3>
      <p>
        The fundamental structure of this WordPress theme was very different
        from how I learned to work with the platform. Rather than populating PHP
        files of the theme itself using custom fields and post types, this
        developer hard-coded HTML into templates and pages within the WordPress
        admin panel. I cannot say that I agree with using this structure, but I
        have found that it is widespread in the world of WordPress.
      </p>
      <p>
        Almost every platform, library, framework, or language is open to a lot
        of interpretation. Good programming involves understanding how your code
        is parsed so you can make the best decisions regarding design and
        performance. Sometimes we fall into the trap of always doing the next
        new thing for the sake of doing it, which can be in conflict with
        understanding the most elegant way of reaching a solution.
      </p>
      <NavLink to={"/"}>
        <p className="link">Back</p>
      </NavLink>
    </Fragment>
  );
}

export default MaxAllenMusic;
