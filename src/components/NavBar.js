import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import Header from './Header';

const flexcontainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="light" light expand="md">
                {/* <NavbarBrand href="/">Home</NavbarBrand> */}
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="w-100" navbar>

                        <div style={flexcontainer}>
                            <Header />
                            <form className="form">
                                <input className="formInput" type="text" placeholder="Type Username"></input>
                                <input type="submit" value="search"></input>
                            </form>
                            {/* <NavItem>
                                <NavLink href="/components/">Users</NavLink>
                            </NavItem> */}
                            <div style={{ display: 'flex' }}>

                                <SignInModal><NavLink onClick={() => this.handleToggleModal()}>Sign In</NavLink></SignInModal>


                                <SignUpModal><NavLink onClick={() => this.handleToggleModal()}>Sign Up</NavLink></SignUpModal>


                            </div>
                        </div>
                        {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Sign Up
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                  </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                  </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBar 