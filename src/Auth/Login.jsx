import { useState } from 'react';
import login from '../assets/Images/Loginbg.png';
import Favicon from '../assets/Images/Favicon.png';
import { NavLink } from 'react-router-dom';


const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = ({ target: { name, value } }) =>
    setLoginData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row" style={{width:'80%'}}>
        <img
          src={login}
          alt="Login Background"
          className="d-none d-lg-block col-lg-6"
          style={{ height: '100vh', objectFit: 'cover' }}
        />
        <div
          className="d-flex flex-column justify-content-center col-lg-6 col-md-8 mx-auto p-4"
          style={{ borderRadius: '12px', backgroundColor: '#f8f9fa' }}
        >
          <div className="text-center mb-3">
            <img src={Favicon} alt="Favicon" style={{ height: '50px', width: '100px' }} />
          </div>
          <form onSubmit={handleSubmit}>
            {['email', 'password'].map((field) => (
              <div className="mb-3" key={field}>
                <label htmlFor={field} style={{ fontSize: '16px' }}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field}
                  className="form-control"
                  name={field}
                  placeholder={`Enter your ${field}`}
                  value={loginData[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="btn btn-success w-100 mt-3"
              style={{ fontSize: '18px', fontWeight: 'bold' }}
            >
              Login
            </button>
            <div className="mt-2 text-center">
                <p><NavLink to="/register" style={{  color: 'gray' ,fontSize:'15px'  }}>Not having an account? Register</NavLink></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;