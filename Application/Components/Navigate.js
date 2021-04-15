import React from 'react'
import ReactDOM from 'react-dom'

class Navigate extends React.Component{
    render(){
        const navigations = ['All Restaurants', 'Restaurants in Chicago', 'Restaurants in Seattle', 'Restaurants in New York']
        return(
            <ul className="navigate-options">
                {navigations.map((value)=>{
                    return (
                        <li key={value}>
                            <button className='btn-clr disp-none'>{value}</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Navigate