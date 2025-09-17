
import styled from "styled-components"

function StyledComponents() {

    //! method - 1 recommended

    const Heading = styled.h1`
    color : red;
    background-color: black;
    padding : 10px 20px;
    border-radius : 10px;
    margin : 20px;
    `

    //! method - 2

    // const Heading = styled.h1({
    //     color: "red",
    //     backgroundColor: "black",
    //     padding: "10px 20px",
    //     borderRadius: "10px",
    //     margin: "20px",
    // })


    return (
        <div>
            <Heading>Hello World</Heading>
        </div>
    )

}

export default StyledComponents