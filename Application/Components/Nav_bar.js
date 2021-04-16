import React, { useDebugValue } from 'react'

import {ThemeConsumer} from './theme'

export default function NavigationBar (){
    return (
        <ThemeConsumer>
            {({theme, toggleTheme})=>{
                return (
                    <nav className="row space-between">
                        <button
                        style={{fontSize:30}}
                        className="btn-clear"
                        onClick={toggleTheme}
                        >
                            {theme==='light'?'Dark Mode':'Light Mode'}
                        </button>
                    </nav>
                )
            }}
        </ThemeConsumer>
    )
}