import { React, Fragment } from "react";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import { CodeBlock, dracula } from "react-code-blocks";

function AdairStaging() {
  const php = `php`;
  const featureText = `function adair_post_types() {
      
       //Review Post Type
       register_post_type('Review', array(
           'capability_type' => 'Review',
           'map_meta_cap' => true,
           'supports' => array('title', 'editor', 'excerpt'), //adds components to admin block editor view
           'rewrite' => array('slug' => 'Reviews'), //change url slug
           'has_archive' => true, //allows archive page
           'public' => true,
           'show_in_rest' => true, //accesses modern block editor screen
           'labels' => array( //changes admin panel labels
               'name' => 'Reviews',
               'add_new_item' => 'Add New Review',
               'edit_item' => 'Edit Review',
               'all_items' => 'All Reviews',
               'singular_name' => 'Review'
           ),
           'menu_icon' => 'dashicons-heart' //admin panel icon
       ));
`;
  return (
    <Fragment>
      <h2>Adair Staging and Design - A Quick Tour</h2>
      <div className="player-outside-wrapper">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="video/AdairVid.mp4"
            controls="true"
            playbackRate="1.1"
            light="true"
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <h2>GOALS FOR THIS PROJECT</h2>
      <p>
        This was the first project I completed as a freelance developer. I was
        able to leverage my general knowledge of the local real estate market to
        win the bid, and I felt so validated in my career trajectory.
      </p>
      <p>
        The client had put together their original website on WordPress.com. It
        needed a design update, a migration to a more controllable hosting
        platform, and content to improve the site’s visit times.
      </p>

      <h2>PROJECT LINK:</h2>
      <p>
        <a className="link" href="https://adairstaging.com/">
          ADAIRSTAGING.COM
        </a>
      </p>

      <h2>MY FAVORITE FEATURES</h2>
      <h3>
        FEATURE 1 <span className={"after-title"}>- Photo Gallery</span>
      </h3>
      <p>
        My first goal in using WordPress was to make all content editable by the
        site owner. I used a custom Gallery plugin (based on Gutenberg) for the
        photo gallery, including fields for a description, alt text, and the
        image upload. Admins can easily edit the gallery from the dashboard.
      </p>
      <img
        alt="CC-UIE Marketing - Funnelytics"
        src="/images/adair-gallery-dashboard.png"
        style={{ width: "100%", paddingBottom: "1.6rem" }}
      ></img>

      <h3>
        FEATURE 2{" "}
        <span className={"after-title"}>- Reviews Custom Post Type</span>
      </h3>
      <p>
        Reviews from happy customers also needed to be added to the site
        regularly. Users can add these posts by entering custom fields and
        publishing the Review custom post type.
      </p>
      <div className="my-code-block">
        <CodeBlock
          language={php}
          theme={dracula}
          text={featureText}
          wrapLines
        />
      </div>

      <h3>
        FEATURE 3{" "}
        <span className={"after-title"}>- Custom Original Content for SEO</span>
      </h3>
      <p>
        One of the main goals of this project was to improve search engine
        optimization. While the WordPress platform took care of many technical
        concerns for us, the content creation work that remained was extensive.
      </p>
      <p>
        Freelance web developers often wear many hats - graphic designer and
        copywriter being common ones! I created unique titles, image
        descriptions, and articles based on frequently-searched
        interior-design-related keywords. I also provided descriptive alt-text
        with all images for both SEO and accessibility.
      </p>

      <h2>LESSONS LEARNED</h2>

      <h3>
        <span className={"after-title"}>
          The Importance of Remaining Flexible
        </span>
      </h3>
      <p>They told me to be creative with it.</p>
      <p>
        I had the perfect design for a designer’s site– minimalist, neutral,
        supportive. The colors, the fonts, and the framework were all entirely
        in service to the proper focus of the website: a massive catalog of
        beautiful interior designs. I proudly shared it with my client at our
        first in-person meeting.
      </p>
      <p>They hated it.</p>
      <p>
        More often than not, success in business boils down to a person’s
        ability to define the scope of a project. For example, I pitched a fair
        price to the client for this project but underestimated the time
        involved in completing it.
      </p>
      <p>
        I had to work longer hours than I’d have liked to keep up with the
        project’s deadlines. I’m glad I delivered this product on time, but I
        learned a lot about how much time development takes.
      </p>
      <p>
        Aside from the obvious ones, I’d say this is one of the most significant
        disadvantages a developer has when starting. I learned not to cut
        corners in the scoping process. Instead, I try to outline almost all of
        the details for the project.
      </p>
      <p>
        The skeleton I built is still intact, but we had to work together and
        rebuild the entire front end. My whole approach was a complete miss. So
        we collaborated and developed the site into something they could be
        happy with.
      </p>
      <p>
        As a developer, I always try to hone my design skills, but I know where
        my limitations are. Working under the close eye of a collaborator became
        a powerful way to push me outside of my styling comfort zone. The result
        is a website truly made for them and not just me.
      </p>

      <NavLink to={"/"}>
        <p>Back</p>
      </NavLink>
    </Fragment>
  );
}

export default AdairStaging;
