import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description , imageUrl , newsUrl, author , date , source}=this.props; //this is done when we want that a certain variable you want to bring here using props that is put this way that is title and description as done , and so these are made in App.js while redering NewsItem , so now {title} and {description} both can be used directly as per the need
  return (
      // <div>This is the NewsItem under news component</div>
<div className="card" >
<div style={{display :'inline-block',position:'absolute',right: '0'}}> 
{/* added the above div for the badge because i t was giving a empty space between the badge and card so in console checked the configuration and styled accordingly here for badge */}
<h6><span className="badge badge-danger">{source}</span></h6>
</div>
{/* in above got the badge code from bootstrap and did the source part as done hence this will render the source of news in a more nice manner as visible in the app */}
<img className="card-img-top" src={imageUrl}/>
<div className="card-body">
<h5 className="card-title">{title}</h5>
<p className="card-text">{description}</p>
<a href={newsUrl} className="btn btn-sm btn-dark">Read More News</a>
<p className="card-text"><small className="text-muted">Author : {!author?'Unknown':author} Dated : {new Date(date).toGMTString()}</small></p>
{/*got the above line from the part of code of the card where there was mentioned some mins ago so also note that in above line you coould have simply put {date} but we need to get the date string and convert into say GMT time form , so first we got initial give data of date in date form using new Date(date) and then this got in date form so then converted into the GMT form also in above line if author is false that is no author mentioned for news by the api then use unknown else the name of author*/}
</div>
</div>    
    )
  }
}
export default NewsItem