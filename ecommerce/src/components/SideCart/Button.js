import { Link } from "gatsby";
import React from "react";

const Button = ({btnText, className, toPage}) => {
    return(
    <Link to={toPage} className={className}>{btnText}</Link>
    );
};

export default Button;