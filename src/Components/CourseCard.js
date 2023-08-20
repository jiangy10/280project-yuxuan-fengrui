import {Card, Container} from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom'
import CourseDetail from "../Pages/CourseDetail";


export default function CourseCard({course}){


    return(
        <Container style={{width:'75%', margin:'10px',}}>
            <Link to={course.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card style={{ borderRadius: '10px',border: '1px solid #7f7053', backgroundColor:'#f2ebdc'}}>
                    <Card.Body style={{borderColor:'black',margin:'5px', padding:'0'}}>
                        <Card.Title style={{fontWeight:'bold', fontSize:'24px', backgroundColor:'#d7c297', borderRadius: '10px', textIndent:'10px'}}>{course.CourseNumber}</Card.Title>
                        <Card.Text>{course.Quarter}</Card.Text>
                        <Card.Text>
                            Instructor: {course.Instructor}
                        </Card.Text>
                        <Card.Link href="#">Syllabus: course syllabus.pdf</Card.Link>
                    </Card.Body>
                </Card>
            </Link>


            <Routes>
                <Route path={course.id} element={<CourseDetail course={course}/>}/>
            </Routes>
        </Container>
        
    );
}

