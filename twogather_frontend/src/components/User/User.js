import React from 'react'

import {
    Col,
    Row,
    Container
} from 'react-bootstrap';

class User extends React.Component{
    constructor(props){
        let tag_list = [];// backend call to get list of activities
        super(props);
    }
    render(){
        return(
            <div>
                <Col>
                    <Row>
                        <h1>
                            Welcome {this.props.username}
                        </h1>
                    </Row>
                    <Row>

                    </Row>
                </Col>
            </div>
        )
    }
}
export default User;