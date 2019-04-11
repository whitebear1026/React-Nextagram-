import React from 'react';
import Post from '../components/Post'
import UserImages from './UserImages';
import { Link } from 'react-router-dom';

const HomePage = props => {
    const { users } = props;
    return (
        <>
            {
                users.map(user => {
                    return (
                        <div className="row">
                            <div className="col-md-4">
                                <Post nickname={user.username}
                                    avatar={user.profileImage}
                                    caption="Welcome to Nextagram"
                                    image={user.profileImage} id={user.id} />

                            </div>
                            <div className="col-md-8">
                                <UserImages id={user.id} />
                            </div>
                        </div>
                    )
                })

            }
        </>

    )
}

export default HomePage;