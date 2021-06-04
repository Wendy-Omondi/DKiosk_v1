import React, { Component } from 'react';
import '../Homeforms/styles/HomeForm.css';
import{ Button } from '../buttons/Button';

export class HomeForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             FirstName: '',
             LastName: '',
             Email: '',
             Password: '',
             ConfirmPassword: ''
        }
    }

    handleFirstnameChange = (event) => {
        this.setState({
            FirstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            LastName: event.target.value
        })
    }
    
    handleEmailChange = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            Password: event.target.value
        })
    }
    handleConfirmPasswordChange = (event) => {
        this.setState({
            ConfirmPassword: event.target.value
        })
    }
    
    render() {
        return (
            <form>
                <div className="form-container">
                <h4>Start your journey today.</h4>
                    <div>
                        <p>First Name</p>
                        <input class="input-container" type='text' value={this.state.FirstName}
                        onChange={this.handleFirstnameChange}/>
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input class="input-container" type='text' value={this.state.LastName}
                        onChange={this.handleLastNameChange} />
                    </div>
                    <div>
                        <p>Email</p>
                        <input class="input-container" type='text' value={this.state.Email}
                        onChange={this.handleEmailChange} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input class="input-container" type='text' value={this.state.Password}
                        onChange={this.handlePasswordChange}/>
                    </div>
                    <div>
                        <p>Confirm Password</p>
                        <input class="input-container" type='text' value={this.state.ConfirmPassword}
                        onChange={this.handleConfirmPasswordChange}/>
                    </div>
                    <div className="hero-btns">
                        <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                            GET STARTED
                        </Button>
                    </div>
                </div>
            </form>
        )
    }
}

export default HomeForm;
