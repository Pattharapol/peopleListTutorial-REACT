import React, { Children } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Person = ({ img, name, job, children }) => {

  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article className="person">
      <img src={url} />
      <h3>Name: {name}</h3>
      <h4>Job: {job}</h4>
      {children}
    </article>
  )
}

const PeopleList = () => {
  return (
    <section className="person-list">
      <Person img="1" name="TIKK1" job="Programmer1">
        <p>Skill : C# JAVA PHP</p>
      </Person>
      <Person img="2" name="TIKK2" job="Programmer2" >
        <p>Skill : SQL</p>
      </Person>
      <Person img="3" name="TIKK3" job="Programmer3" >
        <p>Skill : JAVASCRIPT</p>
      </Person>
      <Person img="4" name="TIKK4" job="Programmer4" >
        <p>Skill : PYTHON</p>
      </Person>
      <Person img="1" name="TIKK1" job="Programmer1">
        <p>Skill : C# JAVA PHP</p>
      </Person>
      <Person img="2" name="TIKK2" job="Programmer2" >
        <p>Skill : SQL</p>
      </Person>
      <Person img="3" name="TIKK3" job="Programmer3" >
        <p>Skill : JAVASCRIPT</p>
      </Person>
      <Person img="4" name="TIKK4" job="Programmer4" >
        <p>Skill : PYTHON</p>
      </Person>
    </section>
  )
}

ReactDOM.render(
  <PeopleList />,
  document.getElementById('root')
);
