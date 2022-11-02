/* eslint-disable no-unused-vars */
import './button.css';

export const Button = (props) => {
    let className;

    if (props.type ==='primary') {
        className = 'button-primary';
    } else if (props.type === 'secondary') {
        className = 'button-secondary';
    } 



    return <button className={`button ${props.className}`}>{props.children}</button>
}