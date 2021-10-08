import React, { useContext } from 'react'
import CartContext from '../../Store/Cart-context'
import CardIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'

function HeaderCardButton(props) {

    const cartCtx = useContext(CartContext);
    const numOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    return (
        <button className={classes.button} onClick={props.showCart}>
            <span className={classes.icon}>
                <CardIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfCartItems}</span>
        </button>
    )
}

export default HeaderCardButton
