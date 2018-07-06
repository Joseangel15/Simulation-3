import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



function Nav() {
    return (
        <div>
            Nav
            <Link to='/Dashboard'><button>Home</button></Link>
            <Link to='/Post/'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
        </div>
    )
}

// function mapStateToProps(state){
//     return {
//         username: state.username,
//         profile: state.profile,
//     }
// }

// let connectedFunction = connect(mapStateToProps);
// let ConnectedNav = connectedFunction(Nav);



export default Nav;