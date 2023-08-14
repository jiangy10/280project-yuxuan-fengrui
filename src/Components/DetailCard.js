import {Card, Container} from 'react-bootstrap'
import { BiLike,BiDislike } from 'react-icons/bi';
import {useState} from "react";
import Experience from './Experience'
import Suggestion from './Suggestion'

export default function DetailCard({course}){
    return(
        <Card >
            <Card.Body style={{marginLeft: '10px '}}>
                {course.Time.map(time =>(
                    <Card.Title>{time}</Card.Title>
                ))}
                <Card.Text style={{fontWeight:'bold'}}>
                    {'Workload: '}
                </Card.Text>
                {course.WorkLoad.map(workload => (<Card.Text style={{textIndent:'15px'}}>{'• '+workload}</Card.Text>))}
                <Card.Text style={{fontWeight:'bold'}}>
                    {'Experience: '}
                </Card.Text>
                {course.Experience.map(experience => (
                    <Experience experience={experience}/>
                ))}
                <Card.Text style={{fontWeight:'bold'}}>
                    {'Suggestions: '}
                </Card.Text>
                {course.Suggestions.map(suggestion => (
                    <Suggestion suggestion={suggestion}/>
                ))}

            </Card.Body>
        </Card>
    );
}
