import React  from 'react';

const Button = (props) => {
    // const [color, setColor] = useState("rgb(170, 170, 170)")
    // const color = "rgb(170,170,170)"
    return(
        <button onClick={() => {props.onGetValue(props.name)}} style={{background: props.operator,color: props.color}}>{props.name}</button>
    );
}

export default Button