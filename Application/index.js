import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navigate from './Components/Navigate.js'
import Information from './Components/Navigate.js'


class Game extends React.Component{
    render(){
        return (
            <div className="navigation-bar"> <Information /> </div>
        )
    }
}

ReactDOM.render(<Game />, document.getElementById('game'));