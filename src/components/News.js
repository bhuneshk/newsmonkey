import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=>{

 const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
   const [articles, setArticles] = useState([])
   const [loading, setLoading] = useState(true)
   const [page, setPage] = useState(1)
   const [totalResults, settotalResults] = useState(0)
  //  document.title = `${capitalize(props.category)} - NewsMonkey`
  
  const update=async ()=>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=10`;
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles);
    setLoading(false);
    settotalResults(parsedData.totalResults);
    props.setProgress(100)
  }
  useEffect(() => {
    update()
  }, [])
  
  const fetchMoreData = async () => {
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=10`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
  }

    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0px", marginTop: '80px' }}>NewsMonkey - Top Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={!loading && <Spinner />}
        >
          <div className="container">
            <div className='row' >
              {articles.map((element) => {
                return <div className='col-md-4'>
                  <NewsItem title={element.title} key={element.url} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}
                    Source={element.source} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  
}

export default News

