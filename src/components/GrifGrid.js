import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GrifGridItem from './GrifGridItem';

const GrifGrid = ( props ) => {

    const { category } = props;

    const { data:images, loading } = useFetchGifs( category ); // con data:images cambio el nombre en la desestructuracion por otro que me vaya mejor

    

    
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        {loading && <p className="card animate__animated animate__flash">Cargando datos...</p>}

        <div className="card-grid">
            
            {
                // images.map(img => (
                //     <li key={img.id}>{img.title}</li>
                // ))
                images.map( img => (     // desestructuración
                    <GrifGridItem
                        key={img.id}
                        { ...img }
                    />
                ))
            }
            
        </div>
        </>
    );
}

export default GrifGrid;