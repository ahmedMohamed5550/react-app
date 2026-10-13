function Button(props) {
    const clickHandler = () => {
        console.log("Button clicked");
    };
    return (
        <button className="react-button" onClick={clickHandler}>
            {props.name}
        </button>
    )
}

export default Button;