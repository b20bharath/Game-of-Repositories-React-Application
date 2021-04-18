import * as React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {fetchResults} from './fetchingResults'
import {FaUser, FaStar, FaCodeBranch, FaExclamationTriangle} from 'react-icons/fa'
import Loading from './Loading'



function Navigate ({language,changeLanguage}){
    const navigations = ['All', 'JavaScript', 'Python', 'Java', 'React','Angular', 'Ruby']
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

function CreateGrid({repos}){

    return (
        <ul className="grid-v">
            {repos.map((value,index)=>{
                const {name, owner, html_url, stargazers_count, forks, open_issues} = value
                const {login, avatar_url} = owner
                return (
                
                <li key={html_url} className="bg-light card">
                    <h3 className="header-repo">Repository: {index+1}</h3>
                    <img className="avatar" src={avatar_url}
                    alt={`Avatar for ${login}`} />
                    <h2 className="center_text">
                        <a href={html_url}>{login}</a>
                    </h2>
                    <ul className="inf">
                        <li>
                            <FaUser color = 'red' size={23} />
                            <a href={`https://github.com/${login}`}>{login}</a>
                        </li>
                        <li>
                            <FaStar color = 'yellow' size={23} />
                            {stargazers_count.toLocaleString()} stars
                        </li>
                        <li>
                            <FaCodeBranch color = 'black' size={23} />
                            {forks.toLocaleString()} forks
                        </li>
                        <li>
                            <FaExclamationTriangle color = 'red' size={23} />
                            {open_issues.toLocaleString()} open 
                        </li>
                    </ul>
                </li>
                )
            })}
        </ul>
    )
}
CreateGrid.propTypes={
    repos: PropTypes.array.isRequired
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

        return !repos[language] && <Loading />
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
                {this.isLoading() && <Loading text = 'Fetching Repos' speed= {300}/>}

                {error && <p className="center-text error">{error}</p>}

                {repos[language] && <CreateGrid repos={repos[language]} />}
            </React.Fragment>
        )
    }
}