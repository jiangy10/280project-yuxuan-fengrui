import {Card, Container} from "react-bootstrap";
import {BiDislike, BiLike} from "react-icons/bi";
import {useState} from "react";
import data from '../data/data.json'

export default function Suggestion({suggestion}){
    const [agree, setAgree] = useState(suggestion.agree);
    const [disagree, setDisagree] = useState(suggestion.disagree);

    return(
        <Card.Text style={{padding:'15 0px',display:'flex',flexDirection:'row', alignItems:'center'}}>
            <Card.Text style={{textIndent:'15px', margin:'0'}}>{'• ' + suggestion.info}</Card.Text>
            <Card.Text style={{display:'flex', alignItems:'center',margin:'0 10px'}} onClick={() => setAgree(agree+1)}>
                <BiLike />
                <Card.Text>{agree}</Card.Text>
            </Card.Text>
            <Card.Text style={{display:'flex', alignItems:'center',margin:'0 10px'}} onClick={() => setDisagree(disagree+1)}>
                <BiDislike/>
                <Card.Text>{disagree}</Card.Text>
            </Card.Text>
        </Card.Text>
    );

}

