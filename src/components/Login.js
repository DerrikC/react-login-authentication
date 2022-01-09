import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

export default function Login() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const { logIn } = useUserAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await logIn(email, password);
        navigate("/home");
      } catch (err) {
        setError(err.message);
      }
        //remove
    setLoading(false)  
    };

    return (
        <>
        <Card>
        <Card.Body>
        <h2 className="text-center mb-4"> Login </h2>
    
        <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button disabled={loading} type="submit">Login</Button>
        </Form>
        <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
        </div>
        </>
    )
}