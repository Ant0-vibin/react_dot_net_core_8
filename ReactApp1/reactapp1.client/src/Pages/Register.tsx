import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

function Register() {
    // state variables for email and passwords
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    // state variable for error messages
    const [error, setError] = useState("");

    const handleLoginClick = () => {
        navigate("/login");
    }


    // handle change events for input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    };

    // handle submit event for the form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validate email and passwords
        if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match.");
        } else {
            // clear error message
            setError("");
            // post data to the /register api
            fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
                //.then((response) => response.json())
                .then((data) => {
                    // handle success or error from the server
                    console.log(data);
                    if (data.ok)
                        setError("Successful register.");
                    else
                        setError("Error registering.");

                })
                .catch((error) => {
                    // handle network error
                    console.error(error);
                    setError("Error registering.");
                });
        }
    };

    return (
        <div className="wrapper">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-box'>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='User E-Mail'
                        value={email}
                        onChange={handleChange}
                    />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Password'
                        value={password}
                        onChange={handleChange}
                    />
                    <FaLock className='icon' />
                </div>
                <div className='input-box'>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={handleChange}
                    />
                    <FaLock className='icon' />
                </div>
                <div>
                    <button type="submit">Register</button>

                </div>
                <div className="register-link">
                    <p>Go to <a href="#" onClick={handleLoginClick}>Login</a></p>
                </div>
            </form>

            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Register;
