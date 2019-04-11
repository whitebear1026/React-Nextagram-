import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUpForm extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Username</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="" />
                </FormGroup>
                <Button color="primary">Add User</Button>
            </Form>
        )
    }
}

export default SignUpForm