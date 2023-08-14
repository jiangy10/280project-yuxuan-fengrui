import {Button, Container, Form, InputGroup, Nav} from "react-bootstrap";
import CourseCard from "../Components/CourseCard";
import data from "../data/data.json";
import {useState} from "react";

function ProfessorPage(){
    const [input, setInput] = useState();
    const [filteredProfessor, setFilteredProfessor] = useState(data);

    return(
        <Container>
            <Nav style={{backgroundColor: '#e9ddc5', display:'flex', flexDirection:'row', justifyContent: 'center',alignItems: 'center', height: '80px'}}>
                <Form>
                    <Form.Group>
                        <a href={'/CoursePage'}><Form.Label
                            style={{fontWeight: 'bold',fontSize: '20px'}}>
                            Professor Name
                        </Form.Label></a>

                        <Form.Control
                            style={{margin:'10px',height:'40px', width: '350px', borderRadius:'10px',fontSize:'15px'}}
                            type={'text'}
                            onChange={(e)=> (setInput(e.target.value))}
                            placeholder="example: MA111"
                            value={input}>

                        </Form.Control>
                        <Button style={{borderRadius: "13px", height:'30px',backgroundColor:'#d7c297'}} onClick={filtWithInput}>Search</Button>
                    </Form.Group>
                </Form>
            </Nav>
            <Container style={{margin: '10px', display:'flex', flexDirection:'column', alignItems: 'center'}}>
                {filteredProfessor.map(course => (
                    <CourseCard key={course.id} course={course}/>

                ))}

            </Container>
        </Container>
    );

    function filtWithInput(){
        console.log({input});
        const filtResult = data.filter((course) => course.Instructor.match(input));
        setFilteredProfessor(filtResult);
        console.log(filtResult)
    }
}

export default ProfessorPage;