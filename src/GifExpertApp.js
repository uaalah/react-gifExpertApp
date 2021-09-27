import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddCategory from './components/AddCategory';
import GrifGrid from './components/GrifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);


    return(
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            { 
                categories.map( category => 
                    <GrifGrid
                        key={ category }
                        category={ category }
                    />
                ) 
            }
        </>
    )
}

export default GifExpertApp;