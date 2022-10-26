import './App.css';
import { NavInshorts } from './components/NavInshorts';
import { useEffect, useState } from 'react';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import Footer from './components/Footer/footer';


function App() {
  const [category, setCategory] = useState('general');
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState(0);
  const [loadMore, setLoadMore] = useState(20);

  // console.log(process.env);

  const newsApi = async () => {
    try{
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const news = await axios.get(
        `https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`
          );
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    newsApi(); 
    // eslint-disable-next-line
  }, [category, newsResult, loadMore]) 

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory}/>
      <NewsContent newsArray={newsArray} newsResult={newsResult} loadMore={loadMore} setLoadMore={setLoadMore}/>
      <Footer />
    </div>
  );
}

export default App;
