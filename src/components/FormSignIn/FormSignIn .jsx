import React from 'react';

import FormInput from '../../components/FormInput/FormInput';


import './FormSignIn.scss';

class FormSignIn extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            email:'',
            password: ''
            
        }
    }

    //prevent the default submit action from firing cuz we want full control over this submit
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const { value, name} = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
           
              
                <form onSubmit={this.handleSubmit}>
                   <FormInput 
                   type='email'
                    name="email"
                     value={this.state.email}
                    handleChange = {this.handleChange}
                    label="email"
                      required/>
                   <FormInput
                   type='password'
                   name='password'
                   value={this.state.password} 
                   handleChange = {this.handleChange}
                   label="password"
                   required/>
                  

               
                </form>
            </div>
        )
    }
}

export default FormSignIn;