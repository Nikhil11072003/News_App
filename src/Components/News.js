import React from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';

//import styled from 'styled-components';
//import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class News extends React.Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
        Head: ' '

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        Head: PropTypes.string
    }
    constructor() {
        super();
        console.log("HEllo I am Constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }

    async componentDidMount() {
        let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b03c2b7fc9b405c9a6850119cbb5574&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b03c2b7fc9b405c9a6850119cbb5574&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0b03c2b7fc9b405c9a6850119cbb5574&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    render() {
        return <div className="container my-3 ">
            <h1 className='text-center' style={{ fontSize: '5rem' }}>Top Headlines-{this.props.Head}</h1>
            <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url} >
                        <NewsItems key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
                <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next</button>
            </div>
        </div>;
    }
}

News.propTypes = propTypes;
News.defaultProps = defaultProps;
// #endregion

export default News;