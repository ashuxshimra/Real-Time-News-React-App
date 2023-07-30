  import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
export default class extends Component {
c='John';
 state ={ //defining an object
progress : 0 //here setting the progress initial valye to be 0
 }
  setProgress=(progress)=>{ //alos this function will be accessed from news component using the props and so defining it while rendering as seen
this.setState({ //hence this function is used for updating the progress of loading bar as per given in news component and then ultimately for a specific value from the news component it goes tot he loading tag and bar runs
  progress : progress 
})
 }
  render() {
    return (
      <div>
        {/* Hello {this.c} this is the first ever usage iof react based class component that is component using not functions but using class so simply typing rcc and getting the first snippet so hi {this.c} */}
      <Router>
      <Navbar/>
      <LoadingBar //so here we have copied the code of the react top loading bar and we have done this below navbar component well depends where you want your navbar component to appear and so now we have to make a function which sets and updates the 'progress' of the loading bar as the data is fetched and loading bar appears and goes away so it has to be updated and thus for that we are making a setProgress function in which the progress could be set as per the value given to it from news component and it will be given from there because before fetching we will keep the initial value of progress as less and once more and more data is fetcjed we increase the value of progress so that the loading bar proceeds forward where if this function was made in react based function comp then it could have been easier but no worries we will make ourselves for this class based component
        color='#f11946'
        height= {3}
        progress={this.state.progress} //updating the loading bar as per the state of loading bar
        // onLoaderFinished={() => setProgress(0)}
      />
      <Switch>
        {/* hence so for these respective url the respective component will be rendered as given */}
        <Route exact path='/'>
        <News key='general' setProgress={this.setProgress} pageSize={5} country='in' category='general'/>
        </Route>
          <Route exact path="/sports"> 
          {/* note that on above line , exact is used to make sure the url changes when clicked on the navbar and in below line , the entire web page component shall change and hence providing a key for that  */}
          <News key='sports' setProgress={this.setProgress} pageSize={5} country='in' category='sports'/>
          </Route>
          <Route path="/entertainment">
          <News key='entertainment' setProgress={this.setProgress} pageSize={5} country='in' category='entertainment'/>
          </Route>
          <Route path="/science">
          <News key='science' setProgress={this.setProgress} pageSize={5} country='in' category='science'/>
          </Route>
          <Route path="/business">
          <News key='business' setProgress={this.setProgress} pageSize={5} country='in' category='business'/> 
          </Route>
          <Route path="/general">
          <News key='general' setProgress={this.setProgress}  pageSize={5} country='in' category='general'/>
          </Route>
          <Route path="/health">
          <News key='health' setProgress={this.setProgress} pageSize={5} country='in' category='health'/>
          </Route>
          <Route path="/technology">
          <News key='technology' setProgress={this.setProgress} pageSize={5} country='in' category='technology'/>
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
     </Router> 
      </div>
    )
  }
}
// note that there was some problem with the infinite scroll package installation once coming back try fixing it


// export default App;
