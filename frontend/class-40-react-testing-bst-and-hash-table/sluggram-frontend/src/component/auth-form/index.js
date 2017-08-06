import './_auth-form.scss'
import React from 'react'
import superagent from 'superagent'
import {isEmail, isAlphanumeric, isAscii} from 'validator'
import debounce from 'lodash/fp/debounce'

import Tooltip from '../tooltip'
import * as util from '../../lib/util.js'

class AuthForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      emailError: 'dorky fork',
      usernameError: null,
      usernameAvailable: true,
      passwordError: null,
      error: false,
      submitted: false,
    }

    this.validateInput = this.validateInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.usernameCheckAvailable = debounce(50)(this.usernameCheckAvailable.bind(this))
  }

  validateInput(e){
    let {name, value} = e.target

    let errors = {
      emailError: this.state.emailError,
      passwordError: this.state.passwordError,
      usernameError: this.state.usernameError,
    }
  
    let setError = (name, error) => {
      let errorName = `${name}Error`
      errors[errorName] = error
    }
    let deleteError = (name) => {
      let errorName = `${name}Error`
      errors[errorName] = null
    }

    if(name === 'email')
      if(!value)
        setError(name, `${name} can not be empty`)
      else if(!isEmail(value)) 
        setError(name, `${value} is not a valid email`)
      else 
        deleteError(name)

    if(name === 'username'){
      if(!value)
        setError(name, `${name} can not be empty`)
      else if(!isAlphanumeric(value))
        setError(name, `username may only contain letters and numbers`)
      else if(value.length < 8)
        setError(name, `username must be 8 characters`)
      else deleteError(name)
    }

    if(name === 'password'){
      if(!value)
        setError(name, `${name} can not be empty`)
      else if(!isAscii(value))
        setError(name, `password may only contain normal characters`)
      else if(value.length < 8)
        setError(name, `password must be 8 characters`)
      else deleteError(name)
    }

    this.setState({
      ...errors, 
      error: !!(errors.emailError || errors.usernameError || errors.passwordError),
    })
  }

  handleChange(e){
    let {name, value} = e.target
    this.validateInput({...e})

    this.setState({
      [name]: value,
    })

    if(this.props.auth === 'signup' && name === 'username'){
      this.usernameCheckAvailable(value)
    }
  }

  usernameCheckAvailable(username){
    return superagent.get(`${__API_URL__}/usernames/${username}`)
    .then(() => this.setState({usernameAvailable: true}))
    .catch(() => this.setState({usernameAvailable: false}))
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    .then(() => {
      this.setState({username: '', email: '', password: ''})
    })
    .catch(error => {
      console.error(error)
      this.setState({error})
    })
  }

  render(){
    let {
      username, 
      emailError,
      passwordError,
      usernameError, 
      usernameAvailable
    } = this.state
    return (
      <form
        onSubmit={this.handleSubmit}
        className={util.classToggler({
          'auth-form': true,
          'error': this.state.error && this.state.submitted,
        })}>

        {util.renderIf(this.props.auth === 'signup', 
          <div>
            <Tooltip message={emailError} />
            <input
              className={util.classToggler({error: emailError})}
              type='text'
              name='email'
              placeholder='email'
              value={this.state.email}
              onChange={this.handleChange}
              />
          </div>
        )}

        <Tooltip message={usernameError} />
        <input
          className={util.classToggler({error: usernameError || usernameAvailable})}
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
          />
        {util.renderIf(username,
          <p className='username-available'> 
            {username} {usernameAvailable ? 'available': 'not available'}
          </p>
        )}


        <Tooltip message={passwordError} />
        <input
          className={util.classToggler({passwordError})}
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
          />

          <button type='submit'>
            {this.props.auth}
          </button>
    
      </form>
    )
  }
}

export default AuthForm
