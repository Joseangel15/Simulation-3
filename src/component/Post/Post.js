import React, {Component} from 'react';


class Post extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }

    //get post information


    render() {
        return (
            <div>
                Post
            </div>
        )
    }
}

export default Post;