// increment / decrement
import { useState } from 'react'

const SideMenu = (props) => {

    // const [ count, setCount] = useState(0)
    //
    // const increment = () => {
    //     setCount(count + 1)
    // }
    //
    // const decrement = () => {
    //     const newCount = count - 1
    //     setCount(newCount)
    // }


    return(
        <div>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>

        </div>
    )
}

export default SideMenu