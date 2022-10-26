import { Container } from '@mui/material';
import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import './NewsContent.css'

 
 const NewsContent = ({newsArray, newsResult, loadMore, setLoadMore}) => {
  return (
    <Container maxWidth='md'>
        <div className='content'>
            <div className='downloadMessage'>   
                <span className='downloadText'>
                    For the best experience, download the Inshorts app on your phone
                </span>
                    <img height="80%" src='https://assets.inshorts.com/website_assets/images/playstore.png' alt='playstore'></img>
                    <img height="80%" src='https://assets.inshorts.com/website_assets/images/appstore.png' alt='appstore'></img>
            </div>

            {
            newsArray.map((newsItem) => (
                <NewsCard newsItem={newsItem} key={newsItem.title} />
            ))}

            {loadMore <= newsResult && (
                <>
                    <hr></hr>
                    <button className='loadMore' 
                    onClick={() => setLoadMore(loadMore + 20)}>
                    Load More
                    </button>
                </>
            )}

        </div>
    </Container >
  )
}

export default NewsContent;
