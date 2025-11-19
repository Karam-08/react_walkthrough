const text = "Press Here"
const num1 = 4
const num2 = 10

const TestComponent = () =>{

    const handleClick = (e) =>{
        e.preventDefault()
        console.log(e.target.TextContent)
    }



  return (
    <div>
        <button className="btn" onClick={(e)=>{handleClick(e)}}>{text}</button>
        <main>{num1 * num2}</main>
    </div>
  )
}

export default TestComponent