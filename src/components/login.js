import '../styles/login.scss';

import React from 'react';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      users: [],
      loggedIn: false,
    };
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  fakeApiCall = () => Promise.resolve('fake api!');

  submitForm = async (e) => {
    e.preventDefault();
    // const object = {
    //   username: this.state.username,
    //   password: this.state.password
    // }
    // axios.post('http://localhost:5000/api/auth/login', object)
    await this.fakeApiCall().then(res => {
      localStorage.token = res.data.token;
      this.setState({ ...this.setState, loggedIn: true })
      alert('Successful log in')
      //Redirect can be found here!
      this.props.history.push("/");
    })
      .catch(err => {
        alert('unsuccessful log in')
      })
    this.setState({ ...this.setState, username: '', password: '' })
  }

  render() {
    return (
      <div className='page-container'>
        <div className='login-container'>
          <div className='login-header'>
            <h1>LOGIN</h1>
          </div>
          <div className='input-container'>
            <input
              className={this.state.username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || this.state.username === '' ? 'input valid' : 'input invalid'}
              placeholder='EMAIL'
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}>
            </input>
            <span className={this.state.username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || this.state.username === '' ? 'valid-email' : 'invalid-email'}>
              Invalid email address
            </span>
            <input
              className={this.state.password.length >= 8 || this.state.password === '' ? 'input valid' : 'input invalid'}
              placeholder='ENTER PASSWORD'
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}>
            </input>
            <span className={this.state.password.length >= 8 || this.state.password === '' ? 'valid-pw' : 'invalid-pw'} >
              Password must be 8 characters long
            </span>
            <button onClick={this.submitForm}>LOGIN</button>
            <div className='forgot-password'>
              <span >
                Forgot Password
            </span>
            </div>
            <button className='sm-button'>LOG IN WITH FACEBOOK</button>
            <button className='sm-button'>LOG IN WITH GOOGLE</button>
          </div>
        </div >
      </div>
    )
  }
};


export default Login;