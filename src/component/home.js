import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class home extends Component {

    render() {

        return (


            <div className="App" style={{
                backgroundImage: "url(" + "https://www.wallpapertip.com/wmimgs/171-1712831_wallpaper-cup-coffee-books-pen-laptop-1080p-hd.jpg"+ ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

                <h1 style={{color: "white"}}> Welcome</h1>

                <div className="mb-1">
                    <Button href="http://localhost:3000/BookList" variant="primary" size="lg">
                        Book List
                    </Button>{' '}

                </div>
            </div>

        )
    }
}

export default home;
