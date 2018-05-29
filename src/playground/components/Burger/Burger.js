import React from 'react';

import classes from './Burger.css';
import BurgerIngridient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transfromedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngridient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if(transfromedIngredients.length === 0) {          
            transfromedIngredients = <p>Please start adding ingridients!</p>;            
        }       
        
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {transfromedIngredients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
};

export default burger;