import { styled } from '@mui/material';
import React from 'react'
import './NewsCard.css';



const NewsCard = ({newsItem}) => {

    const fulldate = new Date(newsItem.publishedAt);
    var date = fulldate.toString().split(" ");
    const hour = parseInt(date[4].substring(0,2));

    const time = hour > 12 ? (hour-12) + date[4].substring(2,5) + " PM" : date[4].substring(0,5) + " AM";

const SourceName = styled('b')({
    color: 'red',
    fontWeight: 300,
})
    
    return (
    //   console.log(newsItem),
      (
        <div className="newsCard">
          <img
            src={
              newsItem.urlToImage
                ? newsItem.urlToImage
                : "https://images.unsplash.com/photo-1610337673044-720471f83677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXJyb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }
            alt={newsItem.title}
            className="newsImage"
          ></img>
          <div className="newsText">
            <div>
              <span className="title">{newsItem.title}</span>
              <br />
              {"  "}
              <span className="author">
                <a href={newsItem.url} target="__blank">
                  <b>short </b>
                </a>
                <span className="muted">
                  by {newsItem.author ? newsItem.author : "unknown"} /{" "}
                  {`${time}`} on {date[2]} {date[1]} {date[3]}, {date[0]}
                </span>
              </span>
            </div>
            <div className="lowerNewsText">
              <div className="description">{newsItem.description}</div>
              <span className="readMore">
                read more at - {"  "}
                <a href={newsItem.url} target="__blank">
                  <SourceName> {newsItem.source.name} </SourceName>
                </a>
              </span>
            </div>
          </div>
        </div>
      )
    ); 
}

export default NewsCard;