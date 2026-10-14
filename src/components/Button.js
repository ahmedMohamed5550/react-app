function Button(props) {
    const clickHandler = () => {
        console.log("Button clicked");
        props.onClick();
    };
    
    return (
        <button className="react-button" onClick={clickHandler}>
            {props.name}
        </button>
    )
}

export default Button;