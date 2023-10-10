import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults :0
    }
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`
  }
  async update() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=10`;
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.update();
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=10`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false
    })
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0px" }}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults+10}
          loader={!this.state.loading && <Spinner />}
        >
          <div className="container">
            <div className='row' >
              {this.state.articles.map((element) => {
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
}

export default News

