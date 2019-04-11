import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Post from './components/Post';
import axios from 'axios';
import HomePage from './pages/HomePage';
import UserImages from './pages/UserImages';
import Loader from './components/Loader';
import { Route, Link } from 'react-router-dom';
import UserProfilePage from './pages/UserProfilePage';


class App extends Component {
  state = {
    users: [],
    isLoading: false
  }


  componentDidMount() {
    this.setState({ isLoading: true })
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(results => {
        console.log(results)
        this.setState({
          users: results.data
        })
        setTimeout(() => {
          this.setState({ isLoading: false })
        }, 2000)
      })

  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <>
        <NavBar />
        <div class="container-fluid p-2 bg-whitesmoke">
          <Route exact path="/" component={props => {
            return (
              isLoading
                ? <Loader />
                : <HomePage users={users} {...props} />
            )
          }} />
          <Route path="/users/:id" component={props => {
            return (
              isLoading
                ? <Loader />
                : <UserProfilePage users={users} {...props} />
            )
          }} />
          {/* <Route path="/flex" component={FlexPage} /> */}

        </div>
      </>
    )
  }
}
export default App;

