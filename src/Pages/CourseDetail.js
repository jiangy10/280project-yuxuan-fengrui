import {Container, Nav} from "react-bootstrap";
import DetailCard from "../Components/DetailCard";

export default function CourseDetail({course}){
    return(
        <Container>
            <Container style={{backgroundColor: '#e9ddc5',borderRadius: '10px'}}>
                <br/>
                <DetailCard course={course}/>
                <br/>
            </Container>
        </Container>
    );
}