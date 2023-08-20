import {Form, Container, Button, Nav, Modal} from "react-bootstrap";

import CourseCard from '../Components/CourseCard'
import AddCourse from "../Components/AddCourse";
import data from '../data/data.json'
import React, {useState} from "react";

function CoursePage(){
    const [input, setInput] = useState();
    const [filteredCourse, setFilteredCourse] = useState(data);


    return(
            <Container style={{display:'flex', flexDirection:'column', justifyContent: 'center',alignItems: 'center', margin:'0', padding:'0', backgroundColor:'#fefdf3'}}>

                <Nav style={{display:'flex', flexDirection:'row', justifyContent: 'center',alignItems: 'center', height: '80px', width:'100vw'}}>
                    <Form>
                        <Form.Group style={{backgroundColor: '#e9ddc5', display:'flex', flexDirection:'row', justifyContent: 'center',alignItems: 'center',width:'100vw'}}>
                            <a href={'/ProfessorPage'}><Form.Label
                                style={{fontWeight: 'bold',fontSize: '20px',color:'black'}}>
                                Course Number
                            </Form.Label></a>

                            <Form.Control
                                style={{margin:'10px',height:'40px', width: '350px', borderRadius:'10px',fontSize:'15px'}}
                                type={'text'}
                                onChange={(e)=> (setInput(e.target.value))}
                                placeholder="example: MA111"
                                value={input}>

                            </Form.Control>
                            <Button style={{borderRadius: "13px",backgroundColor:'#d7c297', borderColor:'black'}} onClick={filtWithInput}>Search</Button>
                            <AddCourse/>
                        </Form.Group>

                    </Form>
                </Nav>


                <Container style={{width:'100vw', margin: '10px', display:'flex', flexDirection:'column', alignItems: 'center'}}>
                        {filteredCourse.map(course => (
                            <CourseCard key={course.id} course={course}/>

                        ))}

                </Container>

                <AddCourse/>
            </Container>



    );
    function filtWithInput(){
        const filtResult = data.filter((course) => course.CourseNumber.match(input));
        setFilteredCourse(filtResult);
    }




}


export default CoursePage;