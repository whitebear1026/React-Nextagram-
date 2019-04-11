import React from 'react'
import UserImages from '../pages/UserImages'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import Post from '../components/Post'
import Image from 'react-graceful-image'

const flexcontainer = {
    height: '150px',
    width: '150px',
    alignItems: 'center',
    display: 'flex'
}



class UserProfilePage extends React.Component {
    state = {
        images: [],
        users: []
    }

    componentDidMount() {
        Axios.get('https://insta.nextacademy.com/api/v1/users')
            .then(results => {
                console.log(results.data)
                this.setState({
                    users: results.data
                })
            })
    }

    render() {
        const { users } = this.state;
        return (
            <>
                {users.map(user => {
                    if (user.id == this.props.match.params.id) {
                        return (
                            <>
                                <header>
                                    <Jumbotron fluid>
                                        <Container fluid>
                                            <Row>
                                                <Col sm='3'>
                                                    <Image src={user.profileImage} alt="alt img" className="w-100 border border-dark rounded-circle" />
                                                </Col>
                                                <Col sm='9'>
                                                    <div>
                                                        <h4>{user.username} <button style={{ color: "primary" }}>Follow</button></h4>
                                                        <div className="d-flex flex-row">
                                                            <h5>Posts: {Math.floor(Math.random() * 100000)}</h5></div>
                                                        <div>
                                                            <h5>Followers: {Math.floor(Math.random() * 100000)}</h5></div>
                                                        <div>
                                                            <h5>Following: {Math.floor(Math.random() * 100000)}</h5>
                                                        </div>

                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Jumbotron>
                                </header>
                                <div>
                                    <h1>Hello! </h1>
                                    <UserImages id={this.props.match.params.id} />
                                </div>
                            </>
                        )
                    }
                })
                }
            </>

        )
    }
}

export default UserProfilePage