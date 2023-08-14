import {Card, Container} from "react-bootstrap";
import {BiDislike, BiLike} from "react-icons/bi";
import {useState} from "react";

export default function Experience({experience}){
    const [agree, setAgree] = useState(experience.agree);
    const [disagree, setDisagree] = useState(experience.disagree);


    return(
        <Container style={{display:'flex', alignItems:'center'}}>
            <Card.Text style={{textIndent:'15px'}}>{'• ' + experience.info}</Card.Text>
            <Container style={{display:'flex', alignItems:'center',margin:'0 10px'}} onClick={() => setAgree(agree+1)}>
                <BiLike />
                <Card.Text>{agree}</Card.Text>
            </Container>
            <Container style={{display:'flex', alignItems:'center',margin:'0 10px'}} onClick={() => setDisagree(disagree+1)}>
                <BiDislike/>
                <Card.Text>{disagree}</Card.Text>
            </Container>
        </Container>
    );
}