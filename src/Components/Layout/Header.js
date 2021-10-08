import React, { Fragment } from 'react'

import classes from './Header.module.css'
import bannerImg from '../../Assets/banner-img.jpg'
import HeaderCardButton from './HeaderCardButton'


function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>    
                <HeaderCardButton showCart={props.onShowCart} />
            </header>            
            <div className={classes['main-image']}>
                <img src={bannerImg} alt='' />
            </div>
        </Fragment>
    )
}

export default Header
