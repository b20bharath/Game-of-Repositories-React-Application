import React from 'react'
import {FaCompass, FaBriefcase, FaUserFriends, FaCode, FaUser, FaUsers} from 'react-icons/fa'
import {data} from './fetchingResults'
import PropTypes from 'prop-types'
import Loading from './Loading'

export class Report extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            winner : null,
            loser : null,
            error : null,
            loading : true
        }
    }
    componentDidMount(){
        const {playerOne,playerTwo} = this.props

        data([playerOne,playerTwo])
            .then((players)=>{
                this.setState({
                    winner: players[0],
                    loser: players[1],
                    error: null,
                    loading: false
                })
            })
            .catch(({message})=>{
                this.setState = ({
                    error: message,
                    loading: false
                }) 
            })

    }
    render(){
        const {winner, loser, error, loading} = this.state

        if(loading === true){
            return <Loading text='Battling' speed={300}/>
        }

        if(error){
            return(
                <p className="center-text error">{error}</p>
            )
        }

        return(
            <React.Fragment>
            <div className="grid-v space-around container-sm">
                <div className="card bg-light">
                    <h4 className="header-lg center-text">
                        {winner.score === loser.score? 'Tie': 'Winner'}
                    </h4>
                    <img 
                        className="avatar"
                        src = {winner.profile.avatar_url}
                        alt = {`Avatar for ${winner.profile.login}`}
                    />
                    <h4 className="canter-text">
                        Score: {winner.score.toLocaleString()}
                    </h4>
                    <h2>
                        <a className="link" href={winner.profile.html_url}>{winner.profile.login}</a>
                    </h2>
                    <ul className="card-list">
                        <li className="">
                            <FaUser color="rgb(239,115,115)" size={22} />
                            {winner.profile.login}
                        </li>
                        <li>
                            <FaCompass color="rgb(144,115,255)" size={22} />
                            {winner.profile.location}
                        </li>
                        <li>
                            <FaBriefcase color="rgb(239,115,255)" size={22} />
                            {winner.profile.company}
                        </li>
                        <li>
                            <FaUsers color="rgb(129,195,245)" size={22} />
                            {winner.profile.followers.toLocaleString()} followers
                        </li>
                        <li>
                            <FaUserFriends color="rgb(144,115,255)" size={22} />
                            {winner.profile.following.toLocaleString()} following
                        </li>
                    </ul>
                </div>
                <div className="card bg-light">
                    <h4 className="header-lg center-text">
                        {loser.score === loser.score? 'Tie': 'Loser'}
                    </h4>
                    <img 
                        className="avatar"
                        src = {loser.profile.avatar_url}
                        alt = {`Avatar for ${loser.profile.login}`}
                    />
                    <h4 className="canter-text">
                        Score: {loser.score.toLocaleString()}
                    </h4>
                    <h2>
                        <a className="link" href={loser.profile.html_url}>{loser.profile.login}</a>
                    </h2>
                    <ul className="card-list">
                        <li className="">
                            <FaUser color="rgb(239,115,115)" size={22} />
                            {loser.profile.login}
                        </li>
                        <li>
                            <FaCompass color="rgb(144,115,255)" size={22} />
                            {loser.profile.location}
                        </li>
                        <li>
                            <FaBriefcase color="rgb(239,115,255)" size={22} />
                            {loser.profile.company}
                        </li>
                        <li>
                            <FaUsers color="rgb(129,195,245)" size={22} />
                            {loser.profile.followers.toLocaleString()} followers
                        </li>
                        <li>
                            <FaUserFriends color="rgb(144,115,255)" size={22} />
                            {loser.profile.following.toLocaleString()} following
                        </li>
                    </ul>
                </div>

            </div>
            <button onClick={this.props.onReset} className="btn btn-dark btn-space">RESET</button>
            </React.Fragment>
        )
    }
}

Report.propTypes = {
    playerOne: PropTypes.string.isRequired,
    playerTwo: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired
}