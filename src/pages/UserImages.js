import axios from 'axios'
import React from "react"
import './UserImages.css';
import Image from 'react-graceful-image';


class UserImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userImages: []
        }
    }

    componentDidMount() {
        //this.setState({ isLoading: true })
        axios.get(`https://insta.nextacademy.com/api/v1/images/?userId=${this.props.id}`)
            .then(results => {
                console.log(results)
                this.setState({
                    userImages: results.data
                })
                console.log(results.data);

                // setTimeout(() => {
                //   this.setState({ isLoading: false })
                // }, 2000)
            })

    }
    render() {
        return (
            <section className="gallery">
                {
                    this.state.userImages.map(userImage => {
                        return (
                            <div className="gallery-item">
                                <Image src={userImage} className="gallery-image" />
                            </div>
                        )
                    })
                }
            </section>
        )
        // return (
        //     <article className="UserImages" ref="UserImages">

        //         <div className="Post-UserImages">
        //             <img src={this.state.userImages} />
        //         </div>
        //     </article>);
    }
}


export default UserImages;
