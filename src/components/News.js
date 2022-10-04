import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types' //just simply type impt and click so this will be imported
// import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component { //ALSO JUST UNDER THE CLASS , YOU DEFINE THE PROPTYPES WHEN IT COMES TO REACT BASED CLASS COMPONENT
  static propsTypes = {
    country: PropTypes.string , //DEFIINING THE TYPE OF PROPS AND IF NOT THIS TYPE THEN ERROR POP
    category: PropTypes.string ,
    pageSize: PropTypes.number
  };
  
  static defaultProps = {   //DEFINING THE DEFAULTPROPS IF NOTHING WHILE RENERING IS DEFINED IN PROPS THEN THIS WILL BE TAKEN.
    country: 'in',
    category: 'general',
    pageSize: 6
  };





// when it comes to class based react component we can use constructor where a constructor is used to define the state of our website and previously we have sent that the state of the site we were updating using useState hook but here we are using the constructor to define the state of website and also , to update to new state we use this.setNew you will see just like we had a updating fucntion in useState hook 
// articles= [ //here this article is just a variable and copied code of api which was under sampleOutput.json and so all in a array
//       {
//         "source": { "id": null, "name": "CNBC" },
//         "author": "Holly Ellyatt",
//         "title": "Russia's Putin announces partial military mobilization - CNBC",
//         "description": "In a pre-recorded announcement, Putin said the West \"wants to destroy our country.\"",
//         "url": "https://www.cnbc.com/2022/09/21/russia-ukraine-war-putin-announces-partial-military-mobilization.html",
//         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107121790-1663737204555-gettyimages-1243390963-RUS_Russian_President_Putin_Attends_Official_Events_In_Moscow.jpeg?v=1663740871&w=1920&h=1080",
//         "publishedAt": "2022-09-21T06:14:31Z",
//         "content": "Russian President Vladimir Putin speaks during a meeting on the military-industrial complex at the Kremlin, September 20, 2022, in Moscow, Russia.\r\nRussian President Vladimir Putin on Wednesday annou… [+3187 chars]"
//       },
//       {
//         "source": { "id": "cnn", "name": "CNN" },
//         "author": "Kevin Liptak",
//         "title": "Biden arrives at the UN 'with the wind at his back,' but worries remain as Russia's war in Ukraine drags on - CNN",
//         "description": "President Joe Biden returns to the green-marbled United Nations stage Wednesday prepared to tout renewed American leadership on Ukraine and the environment, even as the combined effects of a prolonged conflict and economic uncertainty create a dark mood among…",
//         "url": "https://www.cnn.com/2022/09/21/politics/joe-biden-united-nations-general-assembly/index.html",
//         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220915115300-04-biden-rose-garden-0915.jpg?q=w_800,c_fill",
//         "publishedAt": "2022-09-21T04:08:00Z",
//         "content": "President Joe Biden returns to the green-marbled United Nations stage Wednesday prepared to tout renewed American leadership on Ukraine and the environment, even as the combined effects of a prolonge… [+7629 chars]"
//       },
//       {
//         "source": { "id": null, "name": "YouTube" },
//         "author": null,
//         "title": "Explosion at BP Refinery near Toledo, people reported feeling ground shake - Click On Detroit | Local 4 | WDIV",
//         "description": "The fire department is responding to an explosion at a BP refinery near Toledo.  The explosion occurred around 7 p.m.  Officials say a giant plume of black s...",
//         "url": "https://www.youtube.com/watch?v=NqtWwGu15to",
//         "urlToImage": "https://i.ytimg.com/vi/NqtWwGu15to/hqdefault.jpg",
//         "publishedAt": "2022-09-21T03:08:53Z",
//         "content": null
//       },
//       {
//         "source": { "id": null, "name": "TVLine" },
//         "author": "Dave Nemetz",
//         "title": "‘The Bachelorette’ Recap: Season Finale, Rachel, Tino, Gabby, Erich - TVLine",
//         "description": "This season’s two Bachelorette stars already had their final men picked out ahead of Tuesday’s season finale. So this should be a breeze, right? Well, more like a breeze that signals the start of a hurricane. The (three-hour!) finale starts out on an oddly so…",
//         "url": "https://tvline.com/2022/09/20/the-bachelorette-recap-season-finale-rachel-tino-gabby-erich/",
//         "urlToImage": "https://tvline.com/wp-content/uploads/2022/09/the-bachelorette-season-finale-rachel-gabby.png?w=1024",
//         "publishedAt": "2022-09-21T02:55:00Z",
//         "content": "This season’s two Bachelorette stars already had their final men picked out ahead of Tuesday’s season finale. So this should be a breeze, right? Well, more like a breeze that signals the start of a h… [+7857 chars]"
//       },
//       {
//         "source": { "id": null, "name": "WTAJ - www.wearecentralpa.com" },
//         "author": "Rebecca Parsons",
//         "title": "Bivalent Covid-19 booster available in Altoona - WTAJ - www.wearecentralpa.com",
//         "description": "BLAIR COUNTY, Pa (WTAJ) – The James E. Van Zandt VA Medical Center is now offering Bivalent COVID-19 booster vaccines to individuals who have completed a COVID-19 vaccine primary series. A walk-in Bivalent COVID-19 Booster clinic is scheduled for Wednesday, S…",
//         "url": "https://www.wearecentralpa.com/news/local-news/bivalent-covid-19-booster-available-in-altoona/",
//         "urlToImage": "https://www.wearecentralpa.com/wp-content/uploads/sites/69/2022/07/James-E.-Van-Zandt-Medical-Center.jpg?w=1280",
//         "publishedAt": "2022-09-21T02:51:40Z",
//         "content": "BLAIR COUNTY, Pa (WTAJ) – The James E. Van Zandt VA Medical Center is now offering Bivalent COVID-19 booster vaccines to individuals who have completed a COVID-19 vaccine primary series.\r\nA walk-in B… [+1483 chars]"
//       },
//       {
//         "source": { "id": null, "name": "ESPN" },
//         "author": "Marly Rivera",
//         "title": "New York Yankees' Aaron Judge hits 60th home run, one shy of Roger Maris' AL single-season record - ESPN",
//         "description": "Yankees slugger Aaron Judge became just the sixth player in major league history to hit 60 home runs in a single season with a solo shot on Tuesday night.",
//         "url": "https://www.espn.com/mlb/story/_/id/34633515/new-york-yankees-aaron-judge-hits-60th-home-run-one-shy-roger-maris-al-single-season-record",
//         "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0921%2Fr1064868_1296x729_16%2D9.jpg",
//         "publishedAt": "2022-09-21T02:41:02Z",
//         "content": "NEW YORK -- Only five players had hit 60 home runs in a single season in the history of the major leagues -- that is, until New York Yankees slugger Aaron Judge joined that exclusive club with a solo… [+3834 chars]"
//       },
//       {
//         "source": { "id": "cnn", "name": "CNN" },
//         "author": "Amir Vera, Rob Frehse and Zenebou Sylla, CNN",
//         "title": "Legal group files class action lawsuit on behalf of advocacy group and migrants flown to Martha's Vineyard - CNN",
//         "description": "Lawyers for Civil Rights, a non-profit immigrant advocacy group that represents more than 30 of the nearly 50 migrants flown to Martha's Vineyard, filed a class action lawsuit on behalf of Alianza Americas and other migrants, according to a news release from …",
//         "url": "https://www.cnn.com/2022/09/20/us/lawyers-for-civil-rights-lawsuit-marthas-vineyard/index.html",
//         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220917162513-05-marthas-vineyard-migrants-journey-super-tease.jpg",
//         "publishedAt": "2022-09-21T02:39:00Z",
//         "content": "(CNN)Lawyers for Civil Rights, a non-profit immigrant advocacy group that represents more than 30 of the nearly 50 migrants flown to Martha's Vineyard, filed a class action lawsuit on behalf of Alian… [+7432 chars]"
//       },
//       {
//         "source": { "id": "the-washington-post", "name": "The Washington Post" },
//         "author": "Reis Thebault, Andrea Salcedo, Marisa Iati",
//         "title": "FEMA tells a skeptical Puerto Rico that this time won't be like Hurricane Maria - The Washington Post",
//         "description": "Hurricane Fiona's toll in Puerto Rico has slowly begun to emerge. Flooding destroyed homes, bridges and roads.",
//         "url": "https://www.washingtonpost.com/nation/2022/09/20/hurricane-fiona-puerto-rico-fema/",
//         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CCYGQQBZEMI63OFPBICOLXB5WY.jpg&w=1440",
//         "publishedAt": "2022-09-21T02:20:00Z",
//         "content": "Five years after the federal government bungled its response to catastrophic Hurricane Maria in Puerto Rico, the U.S. agency tasked with reacting to major disasters is under pressure again after this… [+7817 chars]"
//       },
//       {
//         "source": { "id": null, "name": "Eonline.com" },
//         "author": "Gabrielle Chung",
//         "title": "Adam Levine and Behati Prinsloo Step Out Together Amid Cheating Allegations - E! NEWS",
//         "description": "Adam Levine and Behati Prinsloo, who are expecting their third baby together, was spotted out in Montecito, Calif., amid allegations that the Maroon 5 frontman had an affair with model Sumner Stroh.",
//         "url": "https://www.eonline.com/news/1347201/adam-levine-and-behati-prinsloo-step-out-together-amid-cheating-allegations",
//         "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2022820/rs_1200x1200-220920181100-_Behati-Prinsloo-and-Adam-Levine-2.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
//         "publishedAt": "2022-09-21T02:19:00Z",
//         "content": "It looks like Adam Levine won't go home without Behati Prinsloo.\r\nOn Sept. 20, the Maroon 5 frontman was spotted enjoying some daylight with the Victoria's Secret model in Montecito, Calif. In photos… [+804 chars]"
//       },
//       {
//         "source": { "id": null, "name": "KHOU.com" },
//         "author": "Chloe Alexander",
//         "title": "HPD: 2-year-old found dead inside stolen vehicle after father shot to death during meetup; suspect on the run - KHOU.com",
//         "description": "The suspect in this chain of events is on the run. Houston police have released surveillance videos and photos in hopes someone can help identify him.",
//         "url": "https://www.khou.com/article/news/crime/baby-found-dead-inside-vehicle/285-4bc588a4-2deb-4bd7-ba04-0f8c271963f0",
//         "urlToImage": "https://media.khou.com/assets/KHOU/images/f593cefd-bf27-4771-b67b-a0ab1be1d9ff/f593cefd-bf27-4771-b67b-a0ab1be1d9ff_1140x641.jpg",
//         "publishedAt": "2022-09-21T02:09:00Z",
//         "content": "HOUSTON A 2-year-old was found dead inside of a stolen SUV Tuesday after his father was shot to death hours earlier during a meetup. \r\nThis horrific chain of events unfolded shortly before 2 p.m. on … [+1785 chars]"
//       },
//       {
//         "source": { "id": null, "name": "YouTube" },
//         "author": null,
//         "title": "Judge orders investigators to stop searching computers seized from Supervisor Kuehl, Metro offices - CBS Los Angeles",
//         "description": "A judge has ordered Los Angeles County Sheriff's Department investigators to cease their search of computers seized from L.A. County Supervisor Sheila Kuehl ...",
//         "url": "https://www.youtube.com/watch?v=3Yg0H5rjvM4",
//         "urlToImage": "https://i.ytimg.com/vi/3Yg0H5rjvM4/maxresdefault.jpg",
//         "publishedAt": "2022-09-21T01:35:24Z",
//         "content": null
//       },
//       {
//         "source": { "id": null, "name": "CNBC" },
//         "author": "Jihye Lee",
//         "title": "For the first time in 30 years, Asia's developing economies are set to grow faster than China's, ADB says - CNBC",
//         "description": "The Asian Development Bank expects developing Asia — excluding China — to grow by 5.3% in 2022, and China by 3.3% in the same year.",
//         "url": "https://www.cnbc.com/2022/09/21/adb-asias-developing-economies-are-set-to-grow-faster-than-chinas.html",
//         "urlToImage": "https://image.cnbcfm.com/api/v1/image/104043338-GettyImages-72546284.jpg?v=1663722176&w=1920&h=1080",
//         "publishedAt": "2022-09-21T01:02:00Z",
//         "content": "Chinese laborers working at a construction site at sunset in Chongqing, China.\r\nAsia's developing economies may be showing signs of recovery, but the Asian Development Bank (ADB) cut its growth forec… [+2558 chars]"
//       },
//       {
//         "source": { "id": null, "name": "The Guardian" },
//         "author": "Guardian staff reporter",
//         "title": "Minnesota schemers allegedly swindle $250m in largest pandemic fraud yet - The Guardian US",
//         "description": "Forty-seven people have been charged in the ‘astonishing display of deceit’ over providing food for low-income children",
//         "url": "https://amp.theguardian.com/us-news/2022/sep/20/minnesota-pandemic-fund-fraud",
//         "urlToImage": null,
//         "publishedAt": "2022-09-21T00:58:00Z",
//         "content": "US newsForty-seven people have been charged in the astonishing display of deceit over providing food for low-income children\r\nBy Amy Forliti (Associated Press)\r\nTue 20 Sep 2022 20.58 EDT\r\nForty-seven… [+6201 chars]"
//       },
//       {
//         "source": { "id": null, "name": "YouTube" },
//         "author": null,
//         "title": "Nvidia RTX 4090 & 4080 Price and Specs Revealed - IGN Daily Fix - IGN",
//         "description": "On today’s IGN The Fix: Games, Nvidia has announced a new flagship GPU as part of its RTX 4000 series of graphics cards, the successor to its two-year-old RT...",
//         "url": "https://www.youtube.com/watch?v=DJwItNhnuSE",
//         "urlToImage": "https://i.ytimg.com/vi/DJwItNhnuSE/maxresdefault.jpg",
//         "publishedAt": "2022-09-20T23:53:42Z",
//         "content": null
//       },
//       {
//         "source": { "id": null, "name": "The Guardian" },
//         "author": "Gloria Oladipo",
//         "title": "Russia-Ukraine war latest: what we know on day 210 of the invasion - The Guardian",
//         "description": "World leaders condemn intention by Moscow-held regions of Ukraine to vote on annexation by Russia",
//         "url": "https://amp.theguardian.com/world/2022/sep/21/russia-ukraine-war-latest-what-we-know-on-day-210-of-the-invasion",
//         "urlToImage": "https://i.guim.co.uk/img/media/754517ae805011c706dcce1aeec42bae936765db/0_232_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8a82f33ada8846368df1043d1d33751a",
//         "publishedAt": "2022-09-20T23:39:00Z",
//         "content": "<li>The proxy Russian authorities in four occupied areas of Ukraine Donetsk, Luhansk, Kherson and Zaporizhzhia announced on Tuesday their intentions to hold referendums between 23-27 September on joi… [+3312 chars]"
//       },
//       {
//         "source": { "id": "bloomberg", "name": "Bloomberg" },
//         "author": null,
//         "title": "Asian Stocks Slip as Investors Brace for Fed Hike: Markets Wrap - Bloomberg",
//         "description": null,
//         "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=ef13a403-3969-11ed-80dd-6c64674f7766&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wOS0yMC9hc2lhLXN0b2Nrcy1wb2lzZWQtdG8tZmFsbC1haGVhZC1vZi1oYXdraXNoLWZlZC1tYXJrZXRzLXdyYXA=",
//         "urlToImage": null,
//         "publishedAt": "2022-09-20T22:36:05Z",
//         "content": "To continue, please click the box below to let us know you're not a robot."
//       },
//       {
//         "source": {
//           "id": "the-wall-street-journal",
//           "name": "The Wall Street Journal"
//         },
//         "author": "Jan Wolfe",
//         "title": "Video Footage Shows Trump Ally Examining Georgia Voting Equipment - The Wall Street Journal",
//         "description": "GOP official and false Trump elector let forensics firm inspect county voter equipment, according to surveillance screenshots filed by voting-rights group",
//         "url": "https://www.wsj.com/articles/video-footage-shows-trump-ally-examining-georgia-voting-equipment-11663711856",
//         "urlToImage": "https://images.wsj.net/im-627204/social",
//         "publishedAt": "2022-09-20T22:10:00Z",
//         "content": "WASHINGTONA former Republican Party official helped a computer forensics firm inspect voting equipment in Georgia and then made misleading statements under oath about her role in the episode, voting-… [+293 chars]"
//       },
//       {
//         "source": { "id": "politico", "name": "Politico" },
//         "author": null,
//         "title": "Special master to Trump's lawyers: 'You can't have your cake and eat it' - POLITICO",
//         "description": "Judge Raymond Dearie pushed Trump’s lawyers repeatedly for not  backing up the former president’s claim that he declassified the highly sensitive national security-related records discovered in his residence.",
//         "url": "https://www.politico.com/news/2022/09/20/trump-special-master-judge-mar-a-lago-00057805",
//         "urlToImage": "https://static.politico.com/12/1e/bb9c0d7c4bc188d00eb26025895e/trump-fbi-18833.jpg",
//         "publishedAt": "2022-09-20T21:41:00Z",
//         "content": "Trump has argued that the 11,000 documents taken from Mar-a-Lago by the FBI pursuant to a search warrant last month were rightfully in his possession, including about 100 bearing classification marki… [+7740 chars]"
//       },
//       {
//         "source": { "id": "reuters", "name": "Reuters" },
//         "author": null,
//         "title": "Ford stock has biggest daily drop since 2011 after inflation warning - Reuters",
//         "description": "Ford Motor Co's <a href=\"https://www.reuters.com/companies/F.N\" target=\"_blank\">(F.N)</a> stock tumbled over 12% on Tuesday in its deepest one-day decline in over a decade after the automaker said inflation-related costs would be $1 billion more than expected…",
//         "url": "https://www.reuters.com/business/autos-transportation/ford-shares-fall-10-warning-higher-inflation-related-supply-costs-2022-09-20/",
//         "urlToImage": "https://www.reuters.com/resizer/0ARPd_ta1hUuumcPMvUpqHQUypI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/M6QL2RPFOFNQ5OXQKO3OV4CAYE.jpg",
//         "publishedAt": "2022-09-20T20:50:00Z",
//         "content": "Sept 20 (Reuters) - Ford Motor Co's (F.N) stock tumbled over 12% on Tuesday in its deepest one-day decline in over a decade after the automaker said inflation-related costs would be $1 billion more t… [+2057 chars]"
//       },
//       {
//         "source": { "id": null, "name": "BBC News" },
//         "author": "https://www.facebook.com/bbcnews",
//         "title": "Panel says US adults should get routine screening for anxiety - BBC",
//         "description": "The draft guidance comes amid a surge in mental health concerns following the Covid-19 pandemic.",
//         "url": "https://www.bbc.com/news/world-us-canada-62974686",
//         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AB8F/production/_126791934_gettyimages-1327080394-1-1.jpg",
//         "publishedAt": "2022-09-20T20:04:58Z",
//         "content": "By Holly Honderichin Washington\r\nFor the first time, a US government-backed expert panel has recommended that adults under 65 should be screened for anxiety disorders.\r\nThe influential US Preventive … [+3367 chars]"
//       }
//     ]


constructor (props)
{
super(props); //always define super function under the constructor the moment you define constructor and so using constructor defining the state of the website
this.state = {
  // articles : this.articles , //note here you could have copied the entire code of api from sampleOutput and pasted here but we did it using making  a varible named articles as done above and bring it staright up here, that here the articles is an kind of a keyword in which we are defining the articles state of website which is done using making a varible named articles and in that variable an array in which the entire api news data which will be the current state
 articles : [], //in above you have removed the initial state of the article and so we are getting the state of article of the website using the api and so initially now settong the state of the website as a blank array
loading : false, //also here loading is false means when the data is all obtained from server then no loading and when all data not rendered then loading true implies that there will be a loading bar
 page : 1 //assume by default that the page no is 1 when started and so when clicked on next button it could be taken to the next page and thus this.state.page+1
}
document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`; //here when clicked on the any categiry of the news from the navbar , the title of the document will change accordingly and hence this and also this fucntion is used to capitalize the first letter as well
}
// now we have something called as componentDidMount function which we generally use to fetch the current data from the api and so here this function executes after the constructor and the render() function 
async componentDidMount(){ //here we have made this async , asynch makes sure that its body runs asynchrounously and fulfills the promise anyhow by giving the option to wait and get things done that is await 
this.props.setProgress(10);//so before the data is fetched we will keep the progress of loading bar to be 10 which is initial and as the data fetches we will increase the progress state of the loading bar
// also note that the loading bar we need is only when the initially data is being fetcjed hence briniging this setProgress here only
let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=75d54d094ff6439382673bfbd660e9d4&pageSize=${this.props.pageSize}`; //got this from newsapi business api and removed the buisness filter and also replaced the country with the in that is of india and copied and hence this is the url from which the current news will be fetched 
this.setState({
  loading : true //when the data will start to fetch there will be a blank screen and in that case we need to put the spinner loading gif so to do it updating the loading as true so that in below where we are redering the <Spinner/> that is just after the heading of news monkey , the condition becomes true and on blank screen , it shows loading gif
})
let data= await fetch(url); //using fetch api to fetch the data from the above url  
this.props.setProgress(30);//now as the above data is fetched so we have to progress the loading bar so now making it 30 and this 30 goes to the function where progress is set and in loading tag , the value of the loading will be 70 and accoridgly the bar moves ahead
let parsedData=await data.json();//now once the data is fetchched , the api data needs to be in json form so that the client can recive in compact and less data consuming form so 
// console.log(parsedData);
this.props.setProgress(70); //now as the above data is fetched so we have to progress the loading bar so now making it 70 and this 70 goes to the function where progress is set and in loading tag , the value of the loading will be 70 and accoridgly the bar moves ahead
this.setState({ //now we have to update the current state of the article of website with that of the new one(fetched data api) and so in order to make it happen we use this.setState here just like we had updating function in useState hook to update the info , so to update with new current data did this  
articles : parsedData.articles, //taking the parsed data in json form and updating now
totalResults : parsedData.totalResults ,//now this will give the total results in the webpage of news , now also note that totalResults(here in sampleOutput API file there is totalResults for number of results as a key so using this )/one page Size=number of pages in total
loading : false
})
this.props.setProgress(100); //100 means the end of the loading bar that is progress set to 100 note that from this website https://www.npmjs.com/package/react-top-loading-bar you can see all the parameters designed accordingly and use them
}
handleNextCl =async ()=>{
console.log('next')
if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))//that is if next page number is greater than the total number of pages than nothing has to be fetched that is nothing should happen else data shall be fetched 
{
  //nothing will be fetched when next page to go will be greater than the total number of pages , and also in above 20 is set(earlier now pageSize through the props) to be page size in url so using 20 as page size
}
 
  // also note that when we keep pressing next , there will be a point where the next page will blank and that blank page will pop up hence this is not a good experience and thus we need to remove this , also we are using the parameter &pageSize in below link which sets the size of each webpage
  else {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=75d54d094ff6439382673bfbd660e9d4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`; //got this from newsapi business api and removed the buisness filter and also replaced the country with the in that is of india and copied and hence this is the url from which the current news will be fetched ,also removed "" and introduced double tick ` and we intriduced &page=1 so replacing it with js code that is ${props.state.page+1}next page as clicked on next button with pageSize being given with the help of props and pageSize is the total number of items you want in your page to appear 
  this.setState({
    loading : true //when the data will start to fetch there will be a blank screen and in that caswe we need to put the spinner loading gif so to do it updating the loading as true so that in below where we are redering the <Spinner/> that is just after the heading of news monkey , the condition becomes true and on blank screen , it shows loading gif
  })
    let data= await fetch(url); //using fetch api to fetch the data from the above url
  let parsedData=await data.json();//now once the data is fetchched , the api data needs to be in json form so that the client can recive in compact and less data consuming form so 
  console.log(parsedData);
  this.setState({ //now we have to update the current state of the article of website with that of the new one(fetched data api) and so in order to make it happen we use this.setState here just like we had updating function in useState hook to update the info , so to update with new current data did this  
    page : this.state.page+1 , 
    articles : parsedData.articles ,
    loading : false //now once the data is fetched and state is updated so we dont need loading gif now hence setting it to false and then ultimately it will stop rendering
  })}
}
handlePrevCl =async ()=>{
  console.log('previous')
  // let url=`https://newsapi.org/v2/top-headlines?country={this.props.country}&category=${this.props.category}&apiKey=75d54d094ff6439382673bfbd660e9d4&page=${this.state.page-1}&pageSize=20`; //got this from newsapi business api and removed the buisness filter and also replaced the country with the in that is of india and copied and hence this is the url from which the current news will be fetched 
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=75d54d094ff6439382673bfbd660e9d4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//  in above url now we are using this way for pageSize as done in above line , for props we set a specific static value and pageSize is the number of items you want in your page to appear so doing it
 this.setState({
  loading : true
 })
let data=await fetch(url); //using fetch api to fetch the data from the above url
  let parsedData= await data.json();//now once the data is fetchched , the api data needs to be in json form so that the client can recive in compact and less data consuming form so 
  console.log(parsedData);
  this.setState({ //now we have to update the current state of the article of website with that of the new one(fetched data api) and so in order to make it happen we use this.setState here just like we had updating function in useState hook to update the info , so to update with new current data did this  
    page : this.state.page-1 ,
    articles : parsedData.articles ,  
    loading : false
})
}
capitalizeFirstLetter=(string)=> { //simply got this function from the stackoverflow and made this a fat arrow function
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// fetchMoreData=async()=>{
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=75d54d094ff6439382673bfbd660e9d4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`; //got this from newsapi business api and removed the buisness filter and also replaced the country with the in that is of india and copied and hence this is the url from which the current news will be fetched ,also removed "" and introduced double tick ` and we intriduced &page=1 so replacing it with js code that is ${props.state.page+1}next page as clicked on next button with pageSize being given with the help of props and pageSize is the total number of items you want in your page to appear 
//   this.setState({
//     // loading : true //when the data will start to fetch there will be a blank screen and in that caswe we need to put the spinner loading gif so to do it updating the loading as true so that in below where we are redering the <Spinner/> that is just after the heading of news monkey , the condition becomes true and on blank screen , it shows loading gif
//   page : this.state.page+1 //as we want that when we scroll down , the page shall increment as the new content comes up
//   });
//     let data= await fetch(url); //using fetch api to fetch the data from the above url
//   let parsedData=await data.json();//now once the data is fetchched , the api data needs to be in json form so that the client can recive in compact and less data consuming form so 
//   console.log(parsedData);
//   this.setState({ //now we have to update the current state of the article of website with that of the new one(fetched data api) and so in order to make it happen we use this.setState here just like we had updating function in useState hook to update the info , so to update with new current data did this  
//     page : this.state.page+1 , 
//     articles : this.state.articles.concate(parsedData.articles) , //now here we have concatenated the current fetched data with the old data that is what happens in the scroll so the article of website whatever it is as of this state is attached with new parsed data as it scroll downs and more and more data is fetched accordingly  
//     loading : false //now once the data is fetched and state is updated so we dont need loading gif now hence setting it to false and then ultimately it will stop rendering
//   })}

  render() {
  return (
  <div className='container my-3'>
  {/* in below just typed h1.text-center and pressed entered so we got below line and so this way the text will be at the center using this bootstrap class */}
  <h1 className="text-center"style={{marginTop  : '80px',marginBottom:'15px'}}> 
  {/* marginBottom gives margin from bottom of the specific component and vice cersa as done */}
          NewsMonkey -Top {this.capitalizeFirstLetter(this.props.category)} Headlines Right Here !
        </h1>
        <div className="text-center">
        {this.state.loading && <Spinner/>}
        {/* in above line , this is like a js way of writing , so this above line implies that if this.state.loading is true that is loading is happening and data is not fetched then , we want to render the Spinner component that is the loading gif should come */}
        </div>
        {/* This is the news component ! */}
        <div className="row"> 
{/* in the above simply type div.row and press enter and enclose those stuff that you want in the row , also if you want to make things appear in one row then for every entity in a row , select and for that column you have to specify how many of the similiar entiry you can display on that coloumn as done */}
        {!this.state.loading && this.state.articles.map((element)=>{ //now here we want to display the objects of articles array that is all the news so we have to iterate through each one of them and one by one show it hence this is obtained by using the this.state.articles.map so this map function is used to map eacj object of array one by one and this map function takes the fat arrow function and so done as shown and also this should have a return so we had put a return before in next line,here defined the element variable to which map function gives object one by one and so this is how iteration is done using map and every object news is displayed
        {/* // note when we are using the map and doing iteration here in the array then it is madatory to mention the key of the object which is unique to that object here the url of a specific news is unique to that news hence in below this way you should mention the key as well so that the key of object is mentioned for uniqueness and iteration */}
        {/* //also in above  {!this.state.loading && implies that if the state of loading is false then you have to execute the code after&& that is then only you have to render the items completely and if it will be true then nothing will be displayed until data is completely fetched , <Spinner/> component will be rendered hence using this we can make the loading gif appear for every action and then the data will be fetched and rendered so getting the loading time for diplaying spinner gif */}
        {/* <InfiniteScroll //here copied this from infinite scroll by googling and pasted here , also we need to scroll more and more so that more data fetches accordingly hence we have placed this here because after the data is fetched , we will scroll more and so more fetching will be needed and ultimayely mapping element and rendering them accordingly
          dataLength={this.state.articles.length} //here articles is the data that is to be fetched and hennce replaced awoth articles
          next={this.fetchMoreData} //and hence here we need a fucntion fetchMoreData so that while scrolling we can fetch more data and go next so we will make a fucntion of it
          hasMore={this.state.articles.length!==this.state.totalResults} //this means that it has to see if there is more data or not and so for such case , the total length of fetched data article must not be equal to the totalResults obtained for a specific page and so if 50=50(resultno-50 so it will be equal to the last article)
          loader={<Spinner/>} //here the loading bar we want while scrolling is the loading spinner so using that component here
        > */}

        {/* {this.state.articles.map((element)=>{ for infinite scroll we using this  */}
        return <div className="col-md-4" key={element.url}>  
        {/* div.col-md-4 this implies for medium devices in one column of a row you cam keep 3 such entities as kept so a total of 3 entirties under row and each of the entity in a row can have 4 more such so in total 4*4 16 */}
        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/> 
         {/* in above line ther eis element.title and vice versa and so in API data that is the codes under the sampleOutput, the title is defned with key "title" and so on , hence element has one object data and then after this it will have next and this way all the news objects will be displayed one by one with the help of this iteraton */}
        </div>
           })}
        {/* <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc"/>
        </div>

        <div className="col-md-4">
        <NewsItem title="myTitle" description="myDesc"/>
        </div>
       */}
       {/* </InfiniteScroll> */}
        </div>
        {/* the below is the flex container that we have got from bootstrap so that we can arrange the next and previous button at last extreme ends */}
        <div className="d-flex justify-content-between"> 
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevCl}>&larr; Previous</button> 
       {/* note in above , the disabled option is made when page number you at is 1 or less so in that case you dont need previous button */}
        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextCl}>Next &rarr;</button>
        {/* note in above we have put the  we have put the condition for the button next to be disabled and this code is simply what you made from handleNextCl's condition so copied and put here as if next page is greater than the total number of pages then we dont need next button also html code for right arrow and left arrow and this way they will be rendered */}
        </div>
      </div>
    )
  }
}
//note that we have defined props and so to define them of what the props are gonna take we have prop types that is defining the prop types and so ,also if nothing is assigned to the prop then for that we use the defaultpropTypes, so for proptypes in react based class component try to use the offcial documentation from google and just paste here  


export default News
