import {Card, Container, Row, Col, Button} from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom'
import CourseDetail from "../Pages/CourseDetail";
import {useState} from "react";


export default function AdminCard({course}){
    const [hidden, setHidden] = useState(false);

    function handleHidden(){
        setHidden(true);
    }
    if(hidden){return null;}

    return(
                <Card style={{ borderRadius: '10px',border: '1px solid #7f7053', backgroundColor:'#f2ebdc',width:'75%', margin:'10px'}}>
                    <Card.Body style={{borderColor:'black',margin:'5px', padding:'0'}}>
                        <Card.Title style={{fontWeight:'bold', fontSize:'24px', backgroundColor:'#d7c297', borderRadius: '10px', textIndent:'10px'}}>{course.CourseNumber}</Card.Title>
                        <Card.Text>{course.Quarter}</Card.Text>
                        <Card.Text style={{fontWeight:'bold'}}>
                            {'Time: '}
                        </Card.Text>
                        {course.Time.map(time =>(
                            <Card.Text style={{textIndent:'15px'}}>{'• '+time}</Card.Text>
                        ))}

                        <Card.Text style={{fontWeight:'bold'}}>
                            {'Instructor: '}
                        </Card.Text>
                        <Card.Text style={{textIndent:'15px'}}>
                            {course.Instructor}
                        </Card.Text>

                        <Card.Text style={{fontWeight:'bold'}}>
                            {'Workload: '}
                        </Card.Text>
                        {course.WorkLoad.map(workload => (<Card.Text style={{textIndent:'15px'}}>{'• '+workload}</Card.Text>))}
                    </Card.Body>
                    <Card.Text style={{marginBottom:'10px'}}>
                        <Row>
                            <Col style={{display: 'flex', justifyContent:'center'}}><Button style={{borderRadius: "13px",backgroundColor:'#d7c297', borderColor:'black'}} onClick={handleHidden}>Decline</Button></Col>
                            <Col style={{display: 'flex', justifyContent:'center'}}><Button style={{borderRadius: "13px",backgroundColor:'#d7c297', borderColor:'black'}} onClick={handleHidden}>Approve</Button></Col>
                        </Row>
                    </Card.Text>
                </Card>

    );
}

