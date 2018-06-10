import React from 'react';

class SocialMedia extends React.Component{
    render(){
        return(
                <div className="social-media">
                    <a href="https://www.facebook.com/ilya.agarishev"><div className='icon facebook' ></div></a>
                    <a href="https://twitter.com/ilyagarishev?lang=ru"> <div className='icon twitter'></div></a>
                    <a href=""> <div className='icon chain'></div></a>
                    <a href=""> <div className='icon opensource'></div></a>
                </div>
        );
    }
}

export default SocialMedia;
