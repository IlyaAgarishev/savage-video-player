import React from 'react';
import accountImage from '../img/accountpicture.jpg';

class AccountArea extends React.Component{

    youFollowed = () => {
        alert('You have followed Ilya Agarishev');
    }
    render(){
        return(
                <div className="account-area">
                    <a href="https://www.facebook.com/ilya.agarishev"><img src={accountImage} alt='' className='account-image'/></a>
                    <div className="account-attributes">
                        <a href="https://www.facebook.com/ilya.agarishev"><div className="account-name">By Ilya Agarishev</div></a>
                        <button id="follow" onClick={this.youFollowed} ></button>
                    </div>
                </div>
        );
    }
}

export default AccountArea;