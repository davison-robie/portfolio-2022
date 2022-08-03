import { React, Fragment } from "react";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import { CodeBlock, dracula } from "react-code-blocks";

function UIE() {
  const feature1text = `<div class="w-70 d-inline m-w-100 m-no-pad" style="display: inline-block; max-width: 600px">
   <div style="padding: 5px 10px; color: #000000; font-family: arial; font-size: 11pt;">
       <p style="line-height: 1.5">
           Hello,
       </p>
       <p style="line-height: 1.5;">
            Thank you for your payment. We are thrilled to have you as a part of the 
              <strong>How to Win Stakeholders and Influence Decisions</strong> 
            program.
       </p>
   </div>
   <div class="invoice-box">
       <table style="width: 100%; line-height: inherit; text-align: left; border-collapse: collapse;">
           <tbody>
               <tr class="item">
                   <td style="padding: 5px; vertical-align: top; border-bottom: 1px solid #eee;">
                       {{158222044__description}}
                   </td>
                   <td style="padding: 5px; vertical-align: top; text-align: right; border-bottom: 1px solid #eee;">
                       $ {{158222044__amount}}
                   </td>
               </tr>
               <tr class="total">
                   <td style="padding: 5px; vertical-align: top">&nbsp;</td>
                   <td style="padding: 5px; vertical-align: top; text-align: right; border-top: 2px solid #eee; font-weight: bold;">
                       Total: $ {{158222044__amount}}
                   </td>
               </tr>`;

  const feature2text = `//HANDLES AND PRINTS THREE ROWS: VIP IND, VIP TEAM, AND VIP TOTAL REVENUE
function paidCounter() {
   //FETCHES RESEARCH INDIVIDUAL ORDERS
   const vipIndOrders = fetch(
           "https://rest.gohighlevel.com/v1/contacts/?limit=100&query=2022-06-research-individual-ordered",
           requestOptions
       )
       .then((response) => response.json())
       .then((result) => {
           let vipIndOrder = result.meta.total;
           document.getElementById("vipIndCount").innerHTML = vipIndOrder;
           document.getElementById("vipIndRevenue").innerHTML =
               "$" + vipIndOrder * 97;
           return vipIndOrder;
       })
       .catch((error) => console.log("error", error));
 
   //FETCHES RESEARCH TEAM ORDERS
   const vipTeamOrders = fetch(
           "https://rest.gohighlevel.com/v1/contacts/?limit=100&query=2022-06-research-team-ordered",
           requestOptions
       )
       .then((response) => response.json())
       .then((result) => {
           let vipTeamOrder = result.meta.total;
           document.getElementById("teamCount").innerHTML = vipTeamOrder;
           document.getElementById("teamRevenue").innerHTML =
               "$" + vipTeamOrder * 147;
           return vipTeamOrder;
       })
       .catch((error) => console.log("error", error));
 
   const printVipTotal = () => {
       vipIndOrders.then((ind) => {
           vipTeamOrders.then((team) => {
               let total = ind * 97 + team * 147;
               document.getElementById("paidCount").innerHTML = "$" + total;
           });
       });
   };
 
   printVipTotal();
}
`;

  const html = "html";
  const javascript = "javascript";

  return (
    <Fragment>
      <h2>CC-UIE - A QUICK TOUR</h2>
      <div className="player-outside-wrapper">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="video/CC-UIEvid.mp4"
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
        Center Centre - User Interface Engineering (CC-UIE) offers career
        services and education for User Experience (UX) professionals worldwide.
        The company currently specializes in virtual classes and seminars,
        ranging from five-day intensives to twenty-four-week strategy programs.
        Many of the products offered are incredibly high-value and require a
        lengthy personalized sales process.
      </p>
      <p>
        The marketing team's function for CC-UIE is to grow the general
        community and identify leads for purchasing premium experiences. These
        leads then proceed through various stages of a marketing funnel system.
        The team accomplishes this through social media, targeted email
        marketing, and direct messages.
      </p>
      <p>
        My job as Senior Web Development Fellow is to design, build, and
        maintain customer relationship management (CRM) automation, email
        marketing campaigns, checkout pages, sales reports, and customer support
        systems for the entire family of CC-UIE products.
      </p>
      <p>
        CC-UIE manages its business with a wide range of web properties and
        services: customer relationships with GoHighLevel, email with MailChimp
        and MailGun, payments with Stripe, documentation with Notion and Google
        Apps, and internal communications with Slack. Both built-in integrations
        with Zapier as well as API calls and WebHooks gave me many opportunities
        to find creative solutions to the marketing team's needs.
      </p>

      <h2>PROJECT LINKS:</h2>
      <p>
        <a className={"link"} href="https://winstakeholders.com">
          winstakeholders.com
        </a>
      </p>
      <p>
        <a
          className={"link"}
          href="http://strategyprogram.centercentre.com/ccuxs-program-continuation"
        >
          strategyprogram.centercentre.com/ccuxs-program-continuation
        </a>
      </p>

      <h2>MY FAVORITE FEATURES</h2>
      <h3>
        FEATURE 1{" "}
        <span className={"after-title"}>- CRM Automation with GoHighLevel</span>
      </h3>
      <p>
        Users who purchase a product or sign up for an event go through a series
        of automated interactions. These automations tag contacts with our
        naming conventions and sort them into pipelines designed to track their
        journey as customers.
      </p>
      <p>
        Here's a bird's eye view of our user journey for a virtual 5-day
        intensive event. Each node or split represents some customer interaction
        or data handling:
      </p>

      <img
        alt="CC-UIE Marketing - Funnelytics"
        src="/images/Intensive-with-VIP-Track.png"
        style={{ width: "100%" }}
      ></img>

      <h3>
        FEATURE 2{" "}
        <span className={"after-title"}>
          - Custom Receipts using Stripe and MailGun APIs
        </span>
      </h3>
      <p>
        One quirk of GoHighLevel is that it does not have a native function for
        sending receipts or issuing refunds. You can use workflows to send
        messages when order forms are submitted, but you cannot use transactions
        as the trigger, thus leaving no room for error handling with things like
        failed payments.
      </p>
      <p>
        Since we used Stripe to process the payments, I knew I would be able to
        trigger an event using a Stripe-registered webhook. To automate receipt
        emails, I used Zapier to access properties of a Stripe Payment Intent
        object and interpolate them into a custom MailGun email template. The
        HTML email template below shows the use of Stripe Payment Intent Object
        properties inserted into the code via Zapier:
      </p>
      <div className="my-code-block">
        <CodeBlock
          language={html}
          theme={dracula}
          text={feature1text}
          wrapLines
        />
      </div>
      <h3>
        FEATURE 3{" "}
        <span className={"after-title"}>- Automated Sales Report App</span>
      </h3>
      <p>
        When I started, one of my daily duties was to download a database of all
        Mighty Networks community members, clean the data, and then upload the
        member list into MailChimp as a tagged audience. While doing all this, I
        gathered information about new sign-ups and sales from various services
        and pasted a summary in our general Slack channel.
      </p>
      <p>
        Later, I automated this task's audience management using Zapier. Then,
        every time a new member joins the community, this information gets
        entered into MailChimp automatically with the proper tags.
      </p>
      <p>
        To grab the information for our Slack summary, I built a webpage on my
        local server that fetched the correct info through the GoHighLevel API.
        This initial sketch later evolved into a Node.JS app that automatically
        stored the data fetches into a Google spreadsheet. What started as a fun
        little exercise in laziness became a fun group side project for the
        team.
      </p>
      <p>
        Here is a portion of the original JavaScript code that fetches specific
        tag categories from GoHighLevel and manipulates those to represent
        revenue for the event in an HTML table:
      </p>
      <div className="my-code-block">
        <CodeBlock
          language={javascript}
          theme={dracula}
          text={feature2text}
          customStyle={{
            overflowX: "auto",
          }}
        />
      </div>

      <h2>LESSONS LEARNED</h2>
      <h3>
        <span className={"after-title"}>
          See Past the Tech (or, It’s All About Dashboards)
        </span>
      </h3>
      <p>
        The most important lesson I took away from working at CC-UIE was that
        the most valuable developers were the ones who could perceive the needs
        of the organization. The ROI on even the most straightforward technical
        solutions becomes much more significant by prioritizing management's
        concerns over technical priorities. I believe there is a saying that
        applies, something about working smarter. Something like that.
      </p>
      <p>
        Many different CRMs are competing for market share right now, each with
        its pros and cons. I feel like GoHighLevel handles most functions
        effectively, but the leaders at CC - UIE often needed different ways to
        view and play with our data. For example, we built the automated sales
        report app specifically because our stakeholders wanted a particular
        data set displayed in a way that is not native to our web services.
      </p>
      <p>
        Much of the work I am proud of involved working around the limitations
        of GoHighLevel and its dashboards. For companies with particular
        analytical needs, GoHighLevel is a fantastic affordable option. These
        facts show me that customization is a critical factor in evaluating CRMs
        in the future.
      </p>
      <NavLink to={"/"}>
        <p className="link">Back</p>
      </NavLink>
    </Fragment>
  );
}

export default UIE;
