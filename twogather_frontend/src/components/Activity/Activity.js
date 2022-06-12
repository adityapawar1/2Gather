import React from 'react'
import Card from 'react-bootstrap/Card';
class Activity extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Card>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Footer>
                    {this.props.text}
                </Card.Footer>
            </Card>
        )
    }
}
export default Activity