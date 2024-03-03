import React from "react";

const Newitem =(props)=>{
    let { title, description, url, toUrl, source, author, date } = props;
    return (
      <div className="card mb-3" style={{ width: "18rem" }}>
        <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{left: "50%", zIndex: 2}}>
          {source}
        </span>
        <img
          className="card-img-top"
          src={
            url
              ? url
              : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg"
          }
          alt="news"
          style={{height: "161px"}}
        />
        <div className="card-body">
        <div className="container1" style={{position: "relative"}}>
          <h5 className="card-title">{title}</h5>
          <div className="textmain">
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              by {author ? author : "Unkown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          </div>
          </div>
          <a href={toUrl} className="btn btn-sm btn-dark" style={{marginTop: "20px"}}>
            Read more
          </a>
        </div>
      </div>
    );
}

export default Newitem;
