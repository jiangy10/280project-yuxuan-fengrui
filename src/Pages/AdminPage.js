import {Form, Container, Button, Nav, Modal} from "react-bootstrap";

import CourseCard from '../Components/CourseCard'
import data from '../data/addCourseRequest.json'
import React, {useState} from "react";
import AdminCard from "../Components/AdminCard";

export default function AdminPage(){


    return(
        <Container style={{display:'flex', flexDirection:'column', justifyContent: 'center',alignItems: 'center', margin:'0', padding:'0', backgroundColor:'#fefdf3'}}>

            <Nav style={{display:'flex', flexDirection:'row', justifyContent: 'center',alignItems: 'center', height: '80px', width:'100vw', backgroundColor:'#e9ddc5'}}>
                <Form.Label style={{fontWeight: 'bold',fontSize: '20px',color:'black'}}>Add Course Request</Form.Label>
            </Nav>


            <Container style={{width:'100vw', margin: '10px', display:'flex', flexDirection:'column', alignItems: 'center'}}>
                {data.map(course => (
                    <AdminCard key={course.id} course={course}/>

                ))}

            </Container>

        </Container>



    );



}
