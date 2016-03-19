"use strict";

import React from 'react'
import { browserHistory } from 'react-router'

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: window.location.pathname
    };
  }

  setFilter(filter) {
    browserHistory.push(filter);
    this.setState({selected: filter});
  }

  isActive(value){
    return 'sidebarElement mt15 pt15 pb15 show pointer p ' + ((value === this.state.selected) ? 'greenBlueGradientLight' : '');
  }

  render() {
    return (
      <div id="quizzlySidebar" className="lightGreenBackground floatL borderleft alignC borderRight" style={{"width": "192px", "height": "100vh"}}>
        <h1 className="alignC white greenBlueGradient flexCenter borderBottom mb30" style={{"height": "57px"}}>QUIZZLY</h1>
        <div className={this.isActive('/p/courses')} onClick={this.setFilter.bind(this, '/p/courses')}>Courses</div>
        <div className={this.isActive('/p/quizzes')} onClick={this.setFilter.bind(this, '/p/quizzes')}>Quizzes</div>
        <div className={this.isActive('/p/metrics')} onClick={this.setFilter.bind(this, '/p/metrics')}>Metrics</div>
        <div className={this.isActive('/p/upload')} onClick={this.setFilter.bind(this, '/p/upload')}>Students</div>
        <div className={this.isActive('/p/download')} onClick={this.setFilter.bind(this, '/p/download')}>Download Grades</div>
      </div>
    )
  }
}

// <Link to="courses" onClick={this.setFilter.bind(this, 'courses')} params={{coursesData: JSON.stringify(courses201)}}>My Courses</Link>
