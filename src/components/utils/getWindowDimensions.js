import React, { useEffect, useState } from 'react';

export function getWindowDimensions(WrappedComponent) {


    return function (props) {

        const [[width, height, media], setDimensions] = useState([0, 0, '']);


        useEffect(function () {
            updateDimensions();
            window.addEventListener('resize', updateDimensions)
            return function () {
                window.removeEventListener('resize', updateDimensions);
            }
        }, [])
        //need to check with console.log before use

        function updateDimensions() {
            const height = window !== undefined ? window.innerHeight : 0;
            const width = window !== undefined ? window.innerWidth : 0;
            const media = +width > 750 ? 'laptop' : +width < 450 
            ? 'mobile' : 'tablet';
        

            setDimensions([width, height, media]);
        };

        const dimensions = { width, height, media };

        

        return <WrappedComponent dimensions={dimensions} {...props} />;

    }


}