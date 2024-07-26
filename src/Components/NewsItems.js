import React from 'react';
//import styled from 'styled-components';
//import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class NewsItems extends React.Component {
   
    render() {
        let {title,description,imageUrl,newsUrl}=this.props;
        return <div> 
            <div className='my-3'>
        <div className=" card shadow-lg p-3 mb-5 bg-body rounded overflow-auto "  style={{height:'35rem'}}>
        <img src={imageUrl} className="card-img-top" alt="..." style={{height:'230px' }}/>
        < div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-dark">Link to Page</a>
        </div>
      </div>
      </div>
      </div>
    }
}

NewsItems.propTypes = propTypes;
NewsItems.defaultProps = defaultProps;
// #endregion

export default NewsItems;