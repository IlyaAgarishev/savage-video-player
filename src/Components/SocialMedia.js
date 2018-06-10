import React from 'react';

class SocialMedia extends React.Component {
  render() {
    return (
      <div className="social-media">
        <a href="https://www.facebook.com/ilya.agarishev">
          <div className="icon facebook" />
        </a>
        <a href="https://twitter.com/ilyagarishev?lang=ru">
          {' '}
          <div className="icon twitter" />
        </a>
        <a href="">
          {' '}
          <div className="icon chain" />
        </a>
        <a href="">
          {' '}
          <div className="icon opensource" />
        </a>
      </div>
    );
  }
}

export default SocialMedia;
