import React, { useState } from 'react';

import styles from '../topbar/Topbar.module.css'

export default function (
    dropdownToggler,
    dropdownMenu,
    tooltipPosition = {
        left: '20px',
        top: '-4px'
    }
){
    {/* only rendered components <dropdownToggler/> */ }

    const [dropdown, setDropdown] = useState(false);
    const [stylesForDropdown, setStylesForDropdown] = useState({
        position: 'relative',
        height: '100%',
    });

    function handleDropdown(event) {
        setStylesForDropdown({
            position: 'relative',
            height: '100%',
            zIndex: (!dropdown ? 2 : 0),
        })
        setDropdown(!dropdown);
    }

    return (
        <div style={stylesMain}>
            <div style={stylesForDropdown} onClick={handleDropdown}>
                {dropdownToggler}
            </div>
            {dropdown &&
            <>
                <div style={stylesDropdownSelf}>{dropdownMenu}
                    <div className={styles.tooltipArrow} style={tooltipPosition}>div</div>
                </div>
                <div 
                  style={stylesTransparent}
                  onClick={handleDropdown}
                > 
                </div>
            </>
            }
        </div>
    );
}

let stylesMain = {
    position: 'relative',
    height: '100%',
}

let stylesDropdownSelf = {
    position: 'absolute',
    zIndex: 3,
    top: '110%',
    left: 0
}

let stylesTransparent = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(150,150,0,0.0)',
    zIndex: 1,
}

