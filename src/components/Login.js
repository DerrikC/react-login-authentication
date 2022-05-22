import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Card, Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

export default function Login() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
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

    };

    return (
        <>
        <Container className="pt-4">
        <Card>
        <Card.Body>
        <img src="./images/elections-canada-logo-sm.png" width="40%" margin="24px"/>
        <h2 className="text-left mt-4 mb-4"> Start your <br></br> voting process. </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="w-100 mb-2" id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="w-100 mb-2" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div className="w-100 text-left mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
        </div>
            <Button className="w-100 mt-4" type="submit">Login</Button>
            <Button variant="outline-secondary" className="w-100 mt-2" type="submit">Register to Vote</Button>
        </Form>
        </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
        </div>
        </Container>
        </>
    )
}