import './_navbar.scss'
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Icon from '../icon'
import {tokenSet} from '../../action/auth-actions.js'
import * as util from '../../lib/util.js'
import * as authActions from '../../action/auth-actions.js'
import {userProfileFetchRequest} from '../../action/profile-actions.js'

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.validateRoute = this.validateRoute.bind(this)
  }

  componentDidMount(){
    this.validateRoute(this.props)
  }

  validateRoute(props){
    let {match, history} = props
    let token = util.readCookie('X-Sluggram-Token')

    if(!token){
      return history.replace('/welcome/signup')
    }

    this.props.tokenSet(token)
    this.props.userProfileFetch()
    .then(() => console.log('booyea'))
    .catch(() => {
      console.log('ERROR: user does not have a userProfile')
      if(!match.url.startsWith('/settings')){
        return history.replace('/settings')
      }
    })
  }

  render(){
    return (
      <header className='navbar'>
        <Icon className='logo' name='kiwi' />
        <h1> sluggram </h1>
        <nav>
          <ul>
            <li><Link to='/welcome/signup'> signup </Link> </li>
            <li><Link to='/welcome/login'> login </Link> </li>
            <li><Link to='/settings'> settings </Link> </li>
            <li><Link to='/dashboard'> dashboard </Link> </li>
          </ul>
        </nav>
        <button onClick={this.props.logout}> logout </button>
        <img className='avatar' src={this.props.userProfile && this.props.userProfile.avatar} />
      </header>
    )
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.userProfile,
})

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout()),
  tokenSet: (token) => dispatch(tokenSet(token)),
  userProfileFetch: () => dispatch(userProfileFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
