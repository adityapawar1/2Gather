import React, {useState, useContext, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import {UserContext} from '../../UserContext';
import Event from '../../components/Events/Event';
import "./results.css";
import {
    Container
} from 'react-bootstrap';


const Results = (props) => {
  //user data, still have to add api though
  const [data, setData] = useContext(UserContext);
  const [showModal, setModal] = useState(true);
  const getEventForTag = (tag) => {
    let headers = { "X-Mx-ReqToken": jwt_token };
    return fetch(
      `http://localhost:4000/api/event/tag/contains/any?tags[]=$%7Btag%7D%60`,
      {
        headers,
      }
    );
  };
  return (
    <>
      <div className="greeting-header m-4">
        Results
      </div>
      <Container>
        {props.tags.map(
            (tags)=>(
              <Card>
                <Card.Body>
                  <Card.Title>{tags.title}</Card.Title>
                  <Card.Text>
                    Starting Time:{tags[startTime]}
                  </Card.Text>
                  <Card.Text>
                    Ending Time:{tags[startTime]}
                  </Card.Text>
                  <Card.Text>
                    Description:{tags[description]}
                  </Card.Text>
                  <Card.Text>
                    Location:{tags[description]}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          )
        }
        <div>
          <Event/>
        </div>
      </Container>
    </>
  )
}

export default Results;
