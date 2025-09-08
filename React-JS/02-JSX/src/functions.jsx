function Learning(){

    function sum(a,b){
        return a + b
    }

    function showMessage(){
        alert("Hello World")
    }

    return (
        <>
        <h1>Learning React JS</h1>
        <h2>{sum(332,32)}</h2>
        <button onClick={showMessage}>Click</button>
        </>
    )
}
export default Learning