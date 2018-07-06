import React, {Component} from 'react';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            posts: [],
            search: '',
            userposts: true
        }

        //get all posts from database

        //reset search


    }
    render() {
        return (
            <div>
                Dashboard
            </div>
        )
    }
}

export default Dashboard;