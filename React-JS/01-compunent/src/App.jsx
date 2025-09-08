
/*
noted : 

1. difference between component vs function 
  * component first letter capital 

2. you can not direct use multiple html elements in return statement use div or fragment tag

3. default export aik file ma aik bar huta ha or multiple export aik time ma multiple variable function or component ku export kr sakta ha

*/


import Header from "./header"

//! Export and Import

// default export
import NewCom from "./export"

// multiple export

import {message,text} from './export';

function App() {

  return (
    <div>
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti minima fugit quaerat sed distinctio consequatur voluptatum nesciunt, nobis aspernatur dolor quam suscipit quasi ipsam animi illum saepe dolorum doloremque quibusdam.</p>

      {/* external component */}

      <Header />

      {/* internal component */}

      <ShowText />

      <h4>SUM : {sum()}</h4>

      <NewCom/>

      <h4>{text()}</h4>

    </div>
  )

}
export default App



//? internal component 

function ShowText() {
  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, rerum odio? Asperiores alias repellendus quas magni ipsam dicta. Aliquam rem obcaecati facilis repellat provident reprehenderit iure accusantium iusto impedit beatae.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus laudantium deserunt, quo voluptatibus consectetur nihil molestias magni inventore, quas in ducimus sequi sint vel enim possimus fugiat animi! Sint, impedit.</p>
    </>
  )
}


//? simple function 

function sum(){
  return 10 + 10
}