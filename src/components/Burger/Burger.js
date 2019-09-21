import React from 'react';
import BurgerIngredient from './Burgeringredient/BurgerIngredient';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Burger.css'


const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredient.length === 0) {
        transformedIngredient = <p>Please add ingredients.</p>
    }
    return (
        <Auxiliary>
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"></BurgerIngredient>
                {transformedIngredient}
                <BurgerIngredient type="bread-bottom"></BurgerIngredient>
            </div>
        </Auxiliary>
    )
}

export default burger;