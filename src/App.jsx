import * as React from "react"

const welcome = {
  title: "Gideon",
  greeting: "Hey"
};

const languagesLearnt = ["Python", "HTML", "CSS", "JavaScript"]

function App(){
  return (
    <div>
      <h1>MY TESTS</h1>
      <p>This is trials of lessons learnt</p>
      <h2>{welcome.greeting} {welcome.title}</h2>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <h2>Programming Languages I have Learnt so Far</h2>
      <ul>
        {languagesLearnt.map((lang) => <li>{lang}</li>)}
      </ul>
    </div>
  );
}

export default App;