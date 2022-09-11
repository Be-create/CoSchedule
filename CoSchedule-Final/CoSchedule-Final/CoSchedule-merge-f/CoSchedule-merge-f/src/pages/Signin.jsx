import React, { useState } from "react";
import styles from "../Css/signin.module.css";

import { useNavigate, NavLink, Link } from "react-router-dom";

const Signin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [DATA, setDATA] = useState([]);

    const loginUser =  (e) => {
        e.preventDefault();

        // const res = await fetch("http://localhost:5000/signup", {
        //     method: "POST",
        //     headers: {
        //         "Content-Types": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password,
        //     }),

            
        // });

        // const data = res.json();

    
            window.alert("Login Sucessfull");
            navigate("/Home");
        
    };

    return (
        <div className={styles.signinPage}>
            <div>
                <img
                    src="https://accounts.coschedule.com/img/login-boxes.svg"
                    className={styles.loginboxesbg1}
                    alt="Boxes to the Left"
                />
                <img
                    src="https://accounts.coschedule.com/img/login-boxes.svg"
                    className={styles.loginboxesbg2}
                    alt="Boxes to the Right"
                />
            </div>
            <div className={styles.formDiv}>
                <Link to="/">
                    <img
                        src="https://coschedule.com/img/cos-logo-full-color.svg"
                        className={styles.cosLogo}
                        alt="CoSchedule Logo"
                    />
                </Link>
                <br />

                <form method="POST">
                    <div className={styles.formComponent}>
                        <label className={styles.formComponent_label}>EMAIL ADDRESS</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email Address"
                            required
                            className={styles.formComponent_input}
                        />
                    </div>

                    <div className={styles.formComponent}>
                        <label className={styles.formComponent_label}>PASSWORD</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.formComponent_input}
                        />
                    </div>

                    <div className={styles.formComponent}>
                        <input
                            className={styles.SigninBtn}
                            type="submit"
                            onClick={loginUser}
                            value="Sign In"
                        />
                    </div>
                </form>

                <br />
                <p>
                    <span className={styles.underlined}>
                        <NavLink to="/Signup">Need an account? |</NavLink>
                    </span>
                    <span className={styles.underlined}>
                        <NavLink to="/Signup"> Forgot your password?</NavLink>
                    </span>
                </p>


            </div>


        </div>
    );
};

export default Signin;
