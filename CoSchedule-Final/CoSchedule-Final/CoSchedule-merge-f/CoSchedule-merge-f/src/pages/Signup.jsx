import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../Css/createcalendar.module.css";
const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;

    const res = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Success");
      console.log("Registration Success");

      navigate("/Signin");
    }
  };
  return (
    <div className={styles.calendarDiv}>
      <div className={styles.upperDiv}>
        <div className={styles.cosDemoTitle}>
          <p className={styles.cosTitle}>Create My Marketing Calendar</p>
          <p className={styles.organizeCoschedule}>
            Free for life. No credit card required.
          </p>
        </div>
      </div>

      <div className={styles.formDiv}>
        <form method="POST">
          <div className={styles.formComponent}>
            <label className={styles.formComponent_label}>Full Name</label>
            <br />
            <input
              className={styles.formComponent_input}
              type="text"
              value={user.name}
              name="name"
              onChange={handleInput}
              required
              placeholder="Full Name"
            />
          </div>

          <div className={styles.formComponent}>
            <label className={styles.formComponent_label}>Email Address</label>
            <br />
            <input
              className={styles.formComponent_input}
              type="email"
              value={user.email}
              name="email"
              onChange={handleInput}
              required
              placeholder="Work Email Address"
            />
          </div>
          <div className={styles.formComponent}>
            <label className={styles.formComponent_label}>Password</label>
            <br />
            <input
              className={styles.formComponent_input}
              type="password"
              value={user.password}
              name="password"
              onChange={handleInput}
              required
              placeholder="Password  ( minimum 8 characters )"
            />
          </div>

          <input
            className={styles.nextSubmitBtn}
            type="submit"
            value="Get Started "
            onClick={PostData}
          />
        </form>
        <NavLink to="/Signin">Already have account</NavLink>
        <p className={styles.terms}>
          <span className={styles.terms_span}>
            By clicking "Get Started Now", you agree to CoSchedule’s{" "}
          </span>
          <span className={styles.underlined}>
            terms of service, end user agreement, and privacy policy
          </span>
          <span className={styles.terms_span}>
            ; you are 16 years or older; and you will receive information from
            CoSchedule from which you can opt out at any time.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;