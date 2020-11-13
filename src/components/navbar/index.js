import React from 'react';
import './navbar.scss';
import F1Logo from '../../assets/icons/f1-logo.png';
import SearchIcon from '../../assets/icons/search.svg';

class NavigationBar extends React.Component {
    render() {
    const style = {
        f1_logo: {
            width: '100px',
        },
        searchIcon: {
            width: '15px',
        }
    }
    const menu = [
        {
            id: 1,
            menu: 'Races'
        },
        {
            id: 2,
            menu: 'Standing'
        },
        {
            id: 3,
            menu: 'Drivers'
        },
        {
            id: 4,
            menu: 'Teams'
        }
    ]
      return (
        <div className="wrapper">
            <div className="child">
                <div className="formula-logo">
                    <p className="text active">F1®</p>
                    <p className="text">F2®</p>
                    <p className="text">F3®</p>
                </div>
                <div className="navbar navigation-bar">
                    <div className="left-container">
                        <img src={F1Logo} alt="f1_logo" style={style.f1_logo}/>
                        <div className="menu-container">
                            {menu.map((text, index) => {
                                return(
                                    <a href="" className="menu" key={index}>{text.menu}</a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="icon-container">
                            <img src={SearchIcon} alt="search_icon" className="search_button" style={style.searchIcon}/>
                        </div>
                        <div className="menu-container">
                            <a href="" className="menu">Sign In</a>
                            <a href="" className="menu">Subscriber</a>
                            {/* <div className="hamburger-menu">
                                <div className="strip"></div>
                                <div className="strip"></div>
                                <div className="strip"></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    };
}

export default NavigationBar;