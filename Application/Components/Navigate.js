import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


function Navigate ({place,changePlace}){
    const navigations = ['All Restaurants', 'Restaurants in Chicago', 'Restaurants in Seattle', 'Restaurants in New York']
    return(
        <ul className="navigate-options">
            {navigations.map((value)=>{
                return (
                    <li key={value}>
                        <button 
                        onClick={()=>changePlace(value)} 
                        style={value === place ? {color: 'rgb(187,36,21)'}:null} 
                        className='btn-clr disp-none'>{value}</button>
                    </li>
                )
            })}
        </ul>
    )
}

Navigate.propTypes={
    place: PropTypes.string.isRequired,
    changePlace: PropTypes.func.isRequired
}

export default class Information extends React.Component{
    constructor(props){
        super(props)
        this.state={
            place: 'All Restaurants'
        }
        this.changePlace = this.changePlace.bind(this)
    }
    changePlace(spot){

        this.setState({
            place: spot
        })

    }
    render(){
        return(
            <React.Fragment>
                <Navigate place={this.state.place} changePlace={this.changePlace}/>
            </React.Fragment>
        )
    }
}