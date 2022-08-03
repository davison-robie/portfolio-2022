import { React, Fragment } from "react";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { CodeBlock, dracula } from "react-code-blocks";

function HCFA() {
  const feature1text = `class Search {
 // 1. Initiate class by declaring variable containers for logic and DOM elements
 constructor() {
   this.addSearchHTML();
   this.resultsDiv = $("#search-overlay__results");
   this.openButton = $(".js-search-trigger");
   this.closeButton = $(".search-overlay__close");
   this.searchOverlay = $(".search-overlay");
   this.searchField = $("#search-term");
   this.events();
   this.isOverLayOpen = false;
   this.isSpinnerVisible = false;
   this.previousValue;
   this.typingTimer;
 }
 
 // 2. events -- defines events and what methods to call
 events() {
   this.openButton.on("click", this.openOverlay.bind(this));
   this.closeButton.on("click", this.closeOverLay.bind(this));
   this.searchField.on("keyup", this.typingLogic.bind(this));
 }
 
 // 3. methods (functions and actions)
 
 typingLogic() {
   //THIS LOGIC HANDLES STATE CHANGES in THE SEARCH BAR
 }
 
 getResults() {
//THIS LOGIC USES JQUERY's getJSON METHOD TO FETCH RESULTS FROM THE WP REST API AND MANIPULATE THE DOM
 }
 
 openOverlay() {
   //OPENS THE SEARCH OVERLAY
 }
 
 closeOverLay() {
  //CLOSES THE SEARCH OVERLAY
 }
 
 addSearchHTML() {
   //APPENDS APPROPRIATE HTML FOR SEARCH BAR
 }
}
 
export default Search;`;
  const feature2text = `makeNoteEditable(thisNote) {
   thisNote.querySelector(".edit-note").innerHTML =
     '<i class="fa fa-times" aria-hidden="true"></i> Cancel';
   thisNote.querySelector(".note-title-field").removeAttribute("readonly");
   thisNote.querySelector(".note-body-field").removeAttribute("readonly");
   thisNote
     .querySelector(".note-title-field")
     .classList.add("note-active-field");
   thisNote
     .querySelector(".note-body-field")
     .classList.add("note-active-field");
   thisNote
     .querySelector(".update-note")
     .classList.add("update-note--visible");
   thisNote.setAttribute("data-state", "editable");
 }
`;
  const feature3text = `function hcfa_post_types() {
       //Campus Post Type
       register_post_type('campus', array(
           'capability_type' => 'campus',
           'map_meta_cap' => true,
           'supports' => array('title', 'editor', 'excerpt'), //adds components to admin block editor view
           'rewrite' => array('slug' => 'campuses'), //change url slug
           'has_archive' => true, //allows archive page
           'public' => true,
           'show_in_rest' => true, //accesses modern block editor screen
           'labels' => array( //changes admin panel labels
               'name' => 'Campuses',
               'add_new_item' => 'Add New Campus',
               'edit_item' => 'Edit Campus',
               'all_items' => 'All Campuses',
               'singular_name' => 'Campus'
           ),
           'menu_icon' => 'dashicons-location-alt' //admin panel icon
       ));
`;
  const javascript = `javascript`;
  const php = `php`;

  return (
    <Fragment>
      <h2>Hurley College of Fine Arts (Wordpress Demo) - A Quick Tour</h2>
      <div className="player-outside-wrapper">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="video/HCFAvid.mp4"
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
        This project follows the "Fictional University" project from Brad
        Schiff's online course,{" "}
        <a href="https://www.udemy.com/share/1013mw3@vmey9IKbqSvFDauHWxJVCkYQDqAb2JBfrVfI-05dIJ2y8nVN--qLAFzkSUnfq_GyIA==/">
          Becoming a WordPress Developer: Unlocking Power with Code
        </a>
        . I feel that by changing the website's branding and adjusting all of
        the variable names to match, I took more ownership of the code, as
        opposed to copying what the course was showing me.
      </p>
      <p>
        Although WordPress has always made a brand for itself by being
        accessible to non-developers, it can be a potent and flexible tool in
        the hands of someone with technical skills. This project aims to
        demonstrate customization and complexity with the WordPress platform.
      </p>
      <h2>Project Link:</h2>
      <p>
        <a className="link" href="http://hcfa.robiemedia.com">
          hcfa.robiemedia.com
        </a>
      </p>

      <h2>My Favorite Features</h2>
      <h3>
        FEATURE 1{" "}
        <span className={"after-title"}>- JavaScript search function</span>
      </h3>
      <p>
        The traditional WordPress Search function does not create the smooth,
        reactive interface many users are accustomed to on modern websites. This
        custom JQuery search function updates the results as the state of the
        search bar changes. Here is an outline of the Search JavaScript Class in
        our theme:
      </p>
      <div className="my-code-block">
        <CodeBlock
          language={javascript}
          theme={dracula}
          text={feature1text}
          wrapLines
        />
      </div>
      <p>
        It also separates the results of our query into different categories
        while filtering out irrelevant results. Additionally, a traditional
        fallback search function is in place when JavaScript is disabled.
      </p>

      <h3>
        FEATURE 2 <span className={"after-title"}>- User notes</span>
      </h3>
      <p>
        This feature demonstrates the Notes custom post type. Using the
        WordPress API, we can allow users to create, edit, or delete their notes
        directly inside the UI without accessing the admin panel. Various
        JavaScript methods are attached to the user controls. Here is the method
        for turning the note edit panel on in the UI:
      </p>
      <div className="my-code-block">
        <CodeBlock
          language={javascript}
          theme={dracula}
          text={feature2text}
          wrapLines
        />
      </div>

      <h3>
        FEATURE 3 <span className={"after-title"}>- Custom Post Types</span>
      </h3>
      <p>
        Custom post types are one of the single most powerful tools in
        WordPress. This project had plenty of them: events, blog posts,
        professors, campuses, programs, and notes were all editable inside the
        admin dashboard and iterable on the site itself.
      </p>
      <div className="my-code-block">
        <CodeBlock
          language={php}
          theme={dracula}
          text={feature3text}
          wrapLines
        />
      </div>

      <h2>LESSONS LEARNED</h2>

      <h3>
        <span className={"after-title"}>Some Dos and Don'ts of WordPress</span>
      </h3>
      <p>
        What I appreciated about Brad Schiff's approach is that, first and
        foremost, we deliver a site that requires no coding knowledge to update
        and operate. By using custom fields and post types, we can carefully
        control different types of content and design relational interactions.
        For example, to update the page content, the user will edit the page
        using custom fields provided by the developer, then WordPress renders
        the content as instructed.
      </p>
      <p>
        I started Brad Schiff's course in 2021. Since then, there have been
        several significant updates to WordPress. My progress in the class went
        from 90% to only 75% overnight. I didn't even know as much as I thought
        I did!
      </p>
      <p>
        With powerful new tools like block editor, there are many more options
        for the site's structure. Although I had just learned so much, it was
        time to keep growing as the world around me grew. I think that it's
        crucial to maintain the skill of learning new frameworks and approaches
        as they come. The whims and fashions of the day move pretty quickly,
        especially in the internet business.
      </p>
      <NavLink to={"/"}>
        <p className="link">Back</p>
      </NavLink>
    </Fragment>
  );
}

export default HCFA;
