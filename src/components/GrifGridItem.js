import React from 'react';

const GrifGridItem = ( props ) => {
    const { id, title, url } = props;

    return(
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GrifGridItem;