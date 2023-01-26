import { React, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';

const ApiPost = () => {
  const [data, setdata] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: 'true',
  });

  const myHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const mySubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/accounts/register', data).then((r) => {
      console.log(r.data);
      // toast('Registration successfully..');
    });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Registration Form</h2>
      <hr />
      <form onSubmit={mySubmit} className=" p-3 ">
        <h2>Title:</h2>
        <input type="text" name="title" className="form-control" onChange={myHandler} />
        <br />
        <h2>First name:</h2>
        <input type="text" name="firstName" className="form-control" onChange={myHandler} />
        <br />
        <h2>Last name:</h2>
        <input type="text" name="lastName" className="form-control" onChange={myHandler} />
        <br />
        <h2>Email:</h2>
        <input type="email" name="email" className="form-control" onChange={myHandler} />
        <br />
        <h2>Password:</h2>
        <input type="password" name="password" className="form-control" onChange={myHandler} />
        <br />
        <h2>Confirm Password:</h2>
        <input type="password" name="confirmPassword" className="form-control" onChange={myHandler} />
        <br />

        <input type="submit" value="save" className="form-control btn btn-outline-primary" />
      </form>
      <hr />
      <div className="text-center">{/* <Link to={'/'}>Already have an account?</Link> */}</div>
    </div>
  );
};

export default ApiPost;
