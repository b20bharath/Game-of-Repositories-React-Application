import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navigate from './Components/Navigate.js'
import Information from './Components/Navigate.js'
import {ThemeProvider} from './Components/theme.js'
import NavigationBar from './Components/Nav_bar.js'


class Game extends React.Component{
    constructor(props){
        super(props)

        this.state={
            theme:'light',
            toggleTheme: ()=>{
                this.setState(({theme})=>(
                    {
                        theme: theme==='light'?'dark':'light'
                    }
                ))
            }
        }
    }
    render(){
        return (
            <ThemeProvider value={this.state}>
                <div className={this.state.theme}>
                    <div className="navigation-bar"> 
                    <NavigationBar />
                    <Information /> </div>
                </div>
            </ThemeProvider>
        )
    }
}

ReactDOM.render(<Game />, document.getElementById('game'));