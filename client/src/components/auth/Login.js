import React, { useState} from 'react';
import { connect } from 'react-redux'
import userJson from '../../config/login.json';
import { setAlert }  from '../../actions/alert'
import PropTypes from 'prop-types'


const Login = ({setAlert ,history}) => {
        const [formData ,setFormData]=useState({
        email:'',
        password:''
    })
    const {email,password}=formData
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit =async e => {
        e.preventDefault();
        try{
            const user ={
                email,password
            }
            console.log(userJson);
            console.log(user);
            if(email === userJson.email && password===userJson.password){
              console.log("login success")
             localStorage.setItem('user', JSON.stringify(user));
             history.push('/menu')
            }else{
              setAlert('Invalid Login ID or Password','danger')
            }
            

        }catch(err){

        }
    }
  return (
    <div className="body-css overlay">
      <div className="card cardDesign col-md-4 p-0 offset-4">
        <div className="card-body p-1">
          <h1 className="large text-primary">Sign In</h1>
          <p className="lead">
            <i className="fas fa-user"></i> Sign into Your Account
          </p>
          <form className="form" onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e=>onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input type="password" value={password}
                onChange={e=>onChange(e)}
                 placeholder="Password" name="password" />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setAlert : PropTypes.func.isRequired,
}

export default connect(null,{setAlert})(Login);
