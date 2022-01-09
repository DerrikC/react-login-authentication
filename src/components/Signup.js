
import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";


export default function Signup () {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
    //remove passref
  const [password, setPassword, setPasswordRef ] = useState("");
  const [loading, setLoading] = useState(false)
  const { signUp } = useUserAuth();
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    //remove
    setLoading(false)  

  };

    return (
        //need the blank tag for jsx formatting
        <>
        <Card>
        <Card.Body>
        <h2 className="text-center mb-4"> Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
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
            {/* remove password confirm group */}
            <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password"
              placeholder="Password"
              onChange={(e) => setPasswordRef(e.target.value)} />
            </Form.Group>
            <Button disabled={loading} type="submit">Sign Up</Button>
        </Form>
        </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Login</Link>
        </div>
        </>
    )
}