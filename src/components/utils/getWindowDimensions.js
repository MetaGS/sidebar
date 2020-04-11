import React, { useEffect, useState } from 'react';

export function getWindowDimensions(WrappedComponent) {


    return function (props) {

        const [[width, height], setDimensions] = useState([0, 0]);


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

            setDimensions([width, height]);
        };

        const dimensions = { width, height };

        console.log(dimensions);

        return <WrappedComponent dimensions={dimensions} {...props} />;

    }


}