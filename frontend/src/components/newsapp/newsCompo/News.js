import React ,{useEffect, useState, useContext} from "react";
import Newitem from "./Newitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoginContext } from "../../../context/notes/loginContext";


const News =(props)=>{
  const [articles,setArticles] = useState([]);
  const [page,setPage] = useState(1);
  const [TotalResults,setTotalResults] = useState(0);
  const context = useContext(LoginContext)
  // let url=``

  document.title = `${capitalizeFirstLetter(props.category)} - NewsChunk`;
 
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const updatenews = async()=>{
    props.setProgress(10);
    let url =`https://newsapi.org/v2/top-headlines?from=${context.date.from}&to=${context.date.to}&country=${props.country}&Category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    console.log(url)
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(70);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    props.setProgress(100);
  }

  useEffect(()=>{
    updatenews();
    // eslint-disable-next-line
  },[context.date]);

  // const prev = async () => {
  //   window.scrollTo(0,0);
  //   updatenews();
  //   setPage(page-1);
    
  // };

  // const next = async () => {
  //   window.scrollTo(0,0);
  //   updatenews();
  //   setPage(page+1);
  //   }
  const fetchMoreData = async() => {
    let url =`https://newsapi.org/v2/top-headlines?from=${context.date.from}&to=${context.date.to}&country=${props.country}&Category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);  
  };
  
  // if (context.date.from) {
  //   url += `&from=${context.date.from}`;
  // }
  // if(context.date.to){
  //   url += `$from=${context.date.to}`
  // }
    return (
      <div className="news" style={{paddingTop: "100px"}}>
          <h2 className="text-center head">NewsChunk - {capitalizeFirstLetter(props.category)} Top Headlines</h2>
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < TotalResults}
          loader={<Spinner/>}
          endMessage={<p style={{ textAlign: "center" }}>
          <b style={{padding: "10px",
        background: "antiquewhite",
        borderRadius: "1rem 0"}}
        >Yay! You have seen it all</b>
        </p>}
        >
          <div className="container my-3 ">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-3" key={element.url}>
              { element.title === "[Removed]"?"": 
                <Newitem
                  title={element.title ? element.title.slice(0,45) : ""}
                  description={element.description ? element.description.slice(0, 65) : "Stay updated with global news and the latest developments."}
                  url={element.urlToImage}
                  toUrl={element.url}
                  source={element.source.name}
                  date={element.publishedAt}
                  author={element.author}
                />
              }
              </div>
            ))}
          </div>
          </div>  
          </InfiniteScroll>
        </div>
    );
}

export default News;
