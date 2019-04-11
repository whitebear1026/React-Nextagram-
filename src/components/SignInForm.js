import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignInForm extends React.Component {
    render() {
        return (
            <Form>
                <Button color="primary">Sign In with Google</Button>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email/Username</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                </FormGroup>
                <Button color="primary">Sign In</Button>
            </Form>
        )
    }
}

export default SignInForm