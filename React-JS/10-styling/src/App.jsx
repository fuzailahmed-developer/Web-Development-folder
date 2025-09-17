
// noted ! 
// 1. inline style - with object and dynamic

// 2. external style - with className
// import : import "./css/externality.css"
// use : className="heading"
// why we not use external css ya global huti ha is liya her file per apply hu jati ha

// 3. css module for fix this problem use 
// extension : style.module.css
// import : import style from "../css/usClient.module.css"
// use : className={style.heading}

// 4.Styled Component
// install : npm i styled-components
/* const Heading = styled.h1`
css here
`
<Heading>Hello World</Heading>
*/


import { useState } from "react";
import UserCard from "./components/userCards";
import "./css/externalstyle.css"
import UsClient from "./components/usslient";
import StyledComponents from "./components/styled";
function App() {

    const user = [
        { name: "Fuzail Ahmed", role: "Software Developer" },
        { name: "Ali Khan", role: "Frontend Developer" },
        { name: "Ahmed Raza", role: "Backend Developer" },
        { name: "Sara Malik", role: "UI/UX Designer" }
    ];


    const stylingData = {

        cardStyling: {
            width: "200px",
            boxShadow: "1px 1px 2px 0px #ccc",
            borderRadius: "8px"
        },

        cardContentStyling: { padding: "5px 10px" }

    }

    const cardContainerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "10px"
    }

    const [changeColor, setChangeColor] = useState(false)

    if (changeColor) {
        stylingData.cardContentStyling.color = "red"
        stylingData.cardContentStyling.backgroundColor = "black"
    } else stylingData.cardContentStyling.color = "black"

    return (
        <div>
            <div style={cardContainerStyle}>
                {
                    user.map((user, index) => (
                        <UserCard userData={stylingData} user={user} key={index} />
                    ))
                }
            </div>
            <div className="btnDiv">
                <button onClick={() => setChangeColor(!changeColor)} className="btn">Change Color</button>
            </div>
            <UsClient />
            <br />
            <StyledComponents />
        </div>
    )

}
export default App

