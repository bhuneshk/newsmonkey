import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalLenght: 0
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7b059855142940549b04611f0728f5d6&pageSize=10`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalLenght: parsedData.articles.length,
      loading: false
    })
  }
  handletoPrev = async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7b059855142940549b04611f0728f5d6&page=${this.state.page - 1}&pageSize=10`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      totalLenght: parsedData.articles.length,
      loading: false
    })
  }

  handletoNext = async () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=7b059855142940549b04611f0728f5d6&page=${this.state.page + 1}&pageSize=10`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      totalLenght: parsedData.articles.length,
      loading: false

    })
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{ margin: "30px 0px" }}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className='row' >
          {!this.state.loading && this.state.articles.length && this.state.articles.map((element) => {
            return <div className='col-md-4'>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} 
               Source={element.source}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handletoPrev}>&larr; Previous</button>
          <button disabled={this.state.totalLenght < 10} type="button" className="btn btn-dark" onClick={this.handletoNext} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News

