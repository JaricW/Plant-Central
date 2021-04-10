import React from 'react';
import footerStyle from '../Styles/footerStyle'

const {divStyle, fontStyle} = footerStyle;

const Footer = () => {
    return(
        <div style={divStyle}>
            <h3 style={fontStyle}>Plant Central</h3>
        </div>
    )
}

export default Footer;