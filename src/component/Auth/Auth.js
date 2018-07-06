import React, {Component} from 'react';
import axios from 'axios';



class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
        }

        this.handleInputChange = this.handleInputChange.bind( this );
        this.handleInputChange2 = this.handleInputChange2.bind( this );

        
    }

    // componentDidMount(){

    // }

    handleInputChange( value ) { 
        this.setState({ username: value })

    }

    handleInputChange2( value ) {
        this.setState({ password: value })
    }

    //Write a method in Auth that sends an axios request to the endpoint you just wrote.
        //The axios request should take the username and password off of state and put them in the body of the request.
        //Once the response comes back, navigate to the Dashboard view.
        //Set up the 'Register' button to fire the method.

    login(){
        axios.post('/api/posts/').then((e) => {
            this.setState({
                username: e.data,
                password: e.data
            })
            console.log(this.state.password)
        })
    }

    //Write a method in Auth that sends an axios request to the endpoint you just wrote.
        //The axios request should take the username and password off of state and put them in the body of the request.
        //Once the response comes back, navigate to the Dashboard view.
        //Set up the 'Login' button to fire the method.

    register(){
        axios.post('/api/auth/register')
    }



    render() {
        return (
            <div>
                Auth
                <p>Username</p>
                    <input type="text" onChange={ (e) => this.handleInputChange( e.target.value) }/>
                <p>Password</p>
                    <input type="text" onChange={ (e) => this.handleInputChange2( e.target.value) }/>
                <div>
                    <button onClick={ (e) => this.login(this.state)}>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}

export default Auth;
