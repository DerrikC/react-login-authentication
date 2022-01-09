import React from "react"
import { Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function Signup () {

    return (
        //need the blank tag for jsx formatting
        <>
        <Card>
        <Card.Body>
        <h2 className="text-center mb-4"> Sign Up</h2>
    
        <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} require />
            </Form.Group>
            <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} require />
            </Form.Group>
            <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} require />
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