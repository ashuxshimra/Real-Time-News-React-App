import React, { Component } from 'react'
//note that you can type rce for react based className component and also you can select rcep which also involves prototypes if needed
import {Link} from 'react-router-dom'
export class Navbar extends Component {
 
  render() {
    return (
      <div>
   <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#">News-Monkey</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      {/* we are using newsapi to fetch data for news and so acc to its documentation under top headlines only you get the faclity of categiry where the news can be filtered and so the category of news are as done below in the navbar */}
      <li className="nav-item">
        <Link className="nav-link" to="/buisness">Buisness</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/entertainment">Entertainment </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/general">General</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/health">Health</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/science">Science</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sports">Sports</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/technology">Technology</Link>
      </li>
     </ul>
   
  </div>
</nav>     
      </div>
    )
  }
}

export default Navbar
