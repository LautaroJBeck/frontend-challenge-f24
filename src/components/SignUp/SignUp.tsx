import React, { useEffect, useState } from "react";
import "../../styles/base.css";
import "../../styles/theme.css";
import "./SignUp.css";

const SignUp = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleValue = (e) => {
    setForm({ 
      ...form, [e.target.name]: e.target.value 
    });

  }
  useEffect(() => {
    if(localStorage.getItem("user")){
      window.location.href="/";
    }
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with your auth call
    localStorage.setItem("user", form.username);
    window.location.href="/";
  };

  return (
    <div className="page">
      <div className="card">
        <div className="card__header">
          {/* Replace with your image: <img src="/logo.svg" alt="Penn" className="brand__img" /> */}
          <div className="brand">
            <div className="brand__text">
              <div className="brand__title">
                PennCourseCart
                </div>
              <div className="brand__subtitle">University of Pennsylvania</div>
            </div>
          </div>
        </div>

        <div className="card__body">
          <h1 className="card__title">Create an account</h1>

          <form onSubmit={onSubmit} className="form">
            <div className="form__field input-form"> 
              <input
                id="username"
                name="username"
                type="text"
                value={form.username}
                onChange={(e)=>handleValue(e)}
                required
                className="form__input"
              />
              <label className={
                `${form.username.length>0?"active-class":""} placeholder`
              }>Username</label>
            </div>

            <div className="form__field">
              <div className="input-password input-form">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e)=>handleValue(e)}
                  required
                  className="form__input input-password__control"
                />
                <label className={
                `${form.password.length>0?"active-class":""} placeholder`
                }>Password</label>
               {showPassword?<i onClick={()=>setShowPassword(!showPassword)} 
                style={{color:"#458189"}}
                className="fa-solid fa-eye"></i>:
                <i onClick={()=>setShowPassword(!showPassword)} className="fa-solid fa-eye-slash"></i>}
              </div>
            </div>

            <button type="submit" className="btn btn--primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
