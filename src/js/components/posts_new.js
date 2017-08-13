import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class PostNew extends Component {
    render(){
        return(
            <div>
                <Link className="btn btn-primary" to="/">
                        new
                    </Link>
            </div>
        )
    }
}

export default PostNew;