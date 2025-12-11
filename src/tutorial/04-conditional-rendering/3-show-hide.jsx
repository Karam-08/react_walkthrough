import {useState, useEffect} from 'react'

const ShowHide = () =>{
    const [show, setShow] = useState(false)
    return (
        <>
            <button className="btn" onClick={() => setShow(!show)}>
                Show/Hide
            </button>
            {show && <h1>Oh, he'll give us what we need! It may not be what we want...</h1>}
            {show && <Item/>}
        </>
    )
}

const Item = () =>{
    const [size, setSize] = useState(window.innerWidth)
    const checkSize = () =>{
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, [])
    return(
        <div style={{marginTop: '2rem'}}>
            <h1>Window</h1>
            <h3>Size: {size}PX</h3>
        </div>
    )
}

export default ShowHide