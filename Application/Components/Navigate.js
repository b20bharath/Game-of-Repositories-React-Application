import * as React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {fetchResults} from './fetchingResults'


function Navigate ({language,changeLanguage}){
    const navigations = ['All', 'JavaScript', 'Python', 'Java']
    return(
        <ul className="navigate-options">
            {navigations.map((value)=>{
                return (
                    <li key={value}>
                        <button 
                        onClick={()=>changeLanguage(value)} 
                        style={value === language ? {color: 'rgb(187,36,21)'}:null}
                        className='btn-clr disp-none'>{value}</button>
                    </li>
                )
            })}
        </ul>
    )
}

Navigate.propTypes={
    language: PropTypes.string.isRequired,
    changeLanguage: PropTypes.func.isRequired
}

export default class Information extends React.Component{
    constructor(props){
        super(props)
        this.state={
            language: 'All',
            repos: {},
            error: null
        }
        this.changeLanguage = this.changeLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }
    componentDidMount(){
        this.changeLanguage(this.state.language)
    }
    isLoading(){
        const {repos, error, language} = this.state

        return !repos[language] && <p>Loading </p>
    }

    changeLanguage(language){

        this.setState({
            language: language,
            error: null
        })

        if(!this.state.repos[language]){
            
        fetchResults(language)
        .then((data) => {
            this.setState(({repos})=>{
                return {
                    repos:{
                        ...repos,
                        [language]: data
                    }
                }
            })
        })
        .catch(()=>{
            this.setState({
                error: 'Error Occured while fetching repos'
            })
        })
        }

    }
    render(){
        const {language,error,repos} = this.state



        return(
            <React.Fragment>
                <Navigate language={this.state.language} changeLanguage={this.changeLanguage}/>
                {this.isLoading() && <p>Loading</p>}

                {error && <p>{error}</p>}

                {repos[language] && <pre>{JSON.stringify(repos[language],null,3)}</pre>}
            </React.Fragment>
        )
    }
}