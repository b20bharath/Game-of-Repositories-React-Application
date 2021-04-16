import React from 'react'
import { FaUserFriends,  FaFighterJet, FaTrophy } from 'react-icons/fa'


export default class Battle extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <React.Fragment>
                <Instructions />
            </React.Fragment>
        )
    }
}

function Instructions (){
    return (
        <div className="Instructions-head">
            <h1 className="center-text header-lg">
                Instructions
            </h1>
            <ol className="container-sm grid-v center-text battle-instructions">
                <li>
                    <h3 className="header-sm">Enter two GitHub users</h3>
                    <FaUserFriends className="bg-light" color="rgb(255,191,117)" size={140}/>
                </li>
                <li>
                    <h3 className="header-sm">Battle</h3>
                    <FaFighterJet className="bg-light" color="#727272" size={140}/>
                </li>
                <li>
                    <h3 className="header-sm">Enter two GitHub users</h3>
                    <FaTrophy className="bg-light" color="rgb(255,255,0)" size={140}/>
                </li>
            </ol>
        </div>
    )
}