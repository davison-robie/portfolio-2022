import { React, Fragment } from "react";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import { CodeBlock, dracula } from "react-code-blocks";

function FireLogger() {
  const feature1text = `module.exports = (sequelize, DataTypes) => {
   const Valuable = sequelize.define('valuables', {    
       category:{
           type: DataTypes.STRING,
           allowNull: false
       },
       name: {
               type: DataTypes.STRING,
               allowNull: false,
           },
          year:{
               type: DataTypes.INTEGER,
               allowNull: false,
           },
          model:{
               type: DataTypes.STRING,
               allowNull: false,       
           },
           serial_number:{
               type: DataTypes.INTEGER,
               allowNull: false,
           },
           photo:{
               type: DataTypes.STRING,
               allowNull: false,
           },
           dollar_value:{
               type: DataTypes.INTEGER,
               allowNull: false,
           },
           owner_id:{
               type: DataTypes.INTEGER,
               allowNull: false
           }
       })
  
   return Valuable;
   };
`;
  const feature2text = `router.post('/create', validateSession, (req, res) => {
   const valuableEntry = {
       category: req.body.valuables.category,
       name: req.body.valuables.name,
       year: req.body.valuables.year,
       model: req.body.valuables.model,
       serial_number: req.body.valuables.serial_number,
       photo: req.body.valuables.photo,
       dollar_value: req.body.valuables.dollar_value,
       owner_id: req.user.id
   }
   Valuable.create(valuableEntry)
   .then(valuables => res.status(200).json(valuables))
   .catch(err => res.status(500).json({error: err}))
});
`;
  const feature3text = `const handleSubmit = (e) => {
   e.preventDefault();
   fetch(APIURL/valuables/create', {
     method: "POST",
     body: JSON.stringify({
       valuables: {
         category: category,
         name: name,
         year: year,
         model: model,
         serial_number: serial_number,
         photo: photo,
         dollar_value: dollar_value,
       },
     }),
     headers: new Headers({
       "Content-Type": "application/json",
       "Authorization": props.token,
     }),
   })
     .then((res) => res.json())
     .then((valuablesData) => {
       toggle();
       setYear("");
       setModel("");
       setSerial_Number("");
       setPhoto("");
       setDollar_Value("");
       setCategory("");
       console.log(valuablesData);
     })
 };
`;
  const language = "javascript";

  return (
    <Fragment>
      <h2>FireLogger (React and Node.JS Demo) - A Quick Tour</h2>
      <div className="player-outside-wrapper">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="video/FireLoggerVid.mp4"
            controls="true"
            playbackRate="1.1"
            light="true"
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <h2>PROJECT LINKS:</h2>
      <p>
        <a className={"link"} href="https://firelogger-client.herokuapp.com">
          Deployment
        </a>
      </p>
      <p>
        <a
          className={"link"}
          href="https://github.com/davison-robie/fireloggerclient"
        >
          Front-End Repository
        </a>
      </p>
      <p>
        <a
          className={"link"}
          href="https://github.com/emscudero/BlueBadgeProject"
        >
          Back-End Repository
        </a>
      </p>

      <h2>Goals for this Project</h2>
      <p>
        FireLogger is a web application that allows users to document critical
        information about their valuables in case of a catastrophic event like a
        fire. User valuables in the database contain multiple fields, such as
        category, year, model number, serial number, value amount in dollars,
        and an image. Users can add valuables, view their existing valuables,
        edit them, and remove them.
      </p>
      <p>
        The idea is from a prompt for a student group project at a web
        development boot camp at 1150 Academy in Indianapolis, IN. This Node.js
        app uses Express and Sequelize for the backend and React (with
        Bootstrap) for the frontend. Our team’s diverse backgrounds but overall
        positive attitude made this an enjoyable and rewarding project to
        complete.
      </p>

      <h2>MY FAVORITE FEATURES</h2>
      <h3>
        FEATURE 1{" "}
        <span className={"after-title"}>
          - Node.JS Server Controller with Express and Sequelize
        </span>
      </h3>
      <p>
        Creating our APIs allowed us to learn and leverage Node for what it does
        best: data-intensive, low-CPU applications. For FireLogger’s Node
        backend application, we modeled our database using Sequelize and built
        our various HTTP request controllers with Express.
      </p>
      <p>Database model with sequelize:</p>
      <div className="my-code-block">
        <CodeBlock language={language} theme={dracula} text={feature1text} />
      </div>

      <p>HTTP Post Request Controller with Express:</p>
      <div className="my-code-block">
        <CodeBlock language={language} theme={dracula} text={feature2text} />
      </div>

      <h3>
        FEATURE 2{" "}
        <span className={"after-title"}>- Full CRUD from User Dashboard</span>
      </h3>
      <p>
        We accessed our backend API using the JS fetch function in React. After
        creating an account and logging in, with authorization powered by JSON
        Web Token and encrypted by BCryptJS, users have complete control over
        adding, changing, and removing valuables from their collection. Here is
        the event handler function for uploading a new valuable object into the
        database:
      </p>
      <div className="my-code-block">
        <CodeBlock language={language} theme={dracula} text={feature3text} />
      </div>

      <h2>LESSONS LEARNED</h2>
      <h3>
        <span className={"after-title"}>
          Group Coordination and DevOps Basics
        </span>
      </h3>
      <p>
        One of the primary purposes of this project from an educational point of
        view was the art of coding in a group. We were separated into groups of
        3 and needed to solve our project prompt with input from every member.
        Documentation and code comments became critical on top of the project
        organization that was required.
      </p>
      <p>
        We used Slack and Zoom for rapid communication, a Trello board for
        tracking tasks, and Github for code management and version control. All
        four of these tools have been constant companions throughout my career,
        and they were invaluable to learn and use on this project.
      </p>
      <p>
        Not only were my teammates great to work with, I still consider them
        friends many years down the road.
      </p>
      <NavLink to={"/"}>
        <p className={"link"}>Back</p>
      </NavLink>
    </Fragment>
  );
}

export default FireLogger;
