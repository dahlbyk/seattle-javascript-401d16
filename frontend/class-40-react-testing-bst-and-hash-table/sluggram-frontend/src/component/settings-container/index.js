import React from 'react'
import {connect} from 'react-redux'
import ProfileForm from '../profile-form'
import {userProfileCreateRequest} from '../../action/profile-actions.js'

class SettingsContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleProfileCreate = this.handleProfileCreate.bind(this)
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this)
  }
  
  handleProfileCreate(userProfile){
    return this.props.userProfileCreate(userProfile)
    .then(() => {
      this.history.push('/dashoard')
    })
  }

  handleProfileUpdate(){
  }

  render(){
    let handleComplete = this.props.userProfile 
      ? this.handleProfileCreate 
      : this.handleProfileUpdate

    return (
      <div className='settings-container'>
        <h2> settings </h2>

        <ProfileForm 
          profile={this.props.userProfile}
          buttonText='create userProfile'
          onComplete={this.handleProfileCreate}
          />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.userProfile
})

let mapDispatchToProps = (dispatch) => ({
  userProfileCreate: (userProfile) => dispatch(userProfileCreateRequest(userProfile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
