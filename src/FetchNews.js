
import React, { Component } from 'react';
// import "regenerator-runtime/runtime"
import { FiChevronRight } from 'react-icons/fi'
import { connect } from "react-redux"
import { getNews } from "./actions/getActions"




class FetchNews extends Component {
  componentWillMount() {
    this.props.getNews()
  }
  render() {
    console.log(this.props.getnews)
    if (this.props.getnews == null) {
      return (
        <span className="spinner">
          Please Wait! Loading......
        </span>
      )
    } else {
      return (
        <div className="news">
          <div className="news_container">
            <div className="header">NY TIMES MOST POPULAR</div>
            {
              this.props.getnews.map((items, index) =>
                <div className="news_tile" key={index}>
                  <a href={items.url}>
                    <h3 className="news_header">{items.title}</h3>
                    <div className="display_Justification">
                      <div className="news_content">{items.abstract}</div>
                      <div className="iconsize"><FiChevronRight /></div>
                    </div>
                    <div className="display_Justification">
                      <div className="news_author">{items.byline}</div>
                      <div className="news_author">{items.published_date}</div>
                    </div>
                  </a>
                </div>
              )
            }
          </div>
        </div>
      )
    }
  }
}
const mapStateToProps = state => ({
  getnews: state.getnews.items
})

export default connect(
  mapStateToProps, { getNews }
)(FetchNews);
