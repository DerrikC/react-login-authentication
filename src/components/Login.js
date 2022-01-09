import React from "react"
import { Form, Button, Card, Link } from "react-bootstrap"

export default function Login() {
 
    return (
        <>
        <Card>
        <Card.Body>
        <h2 className="text-center mb-4"> Login </h2>
    
        <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} require />
            </Form.Group>
            <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} require />
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