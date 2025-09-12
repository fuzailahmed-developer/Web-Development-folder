let HtmlInProps = ({children,color = "blue"}) => {
    console.log(children);
    return (
        <div style={{border : "1px solid red",backgroundColor : "black",color : color,maxWidth : "400px",padding : "10px",borderRadius : "5px"}}>
            {children}
        </div>
    )
}
export default HtmlInProps