import React, {useState} from 'react';
import {Button,Col, Container, FormControl, FormGroup, FormLabel, Modal, FormFileInput, Row} from 'react-bootstrap';


function AddCourse(){

    const fs =  require('fs');

    const [show, setShow] = useState(false)
    const [inform,setInform] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const showInform = () => setInform(true);
    const closeInform = () => setInform(false)

    const [timeNum,setTimeNum] = useState(1);


    return (
        <>
            <Button style={{backgroundColor:'#d7c297', borderColor:'black', borderRadius:'13px'}} onClick={handleShow} variant="primary">
                Add Course
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <FormLabel>CourseNumber*: </FormLabel>
                        <FormControl></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Quarter*: </FormLabel>
                        <FormControl></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Instructor*: </FormLabel>
                        <FormControl></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>syllabus: </FormLabel>
                        <FormControl type={'file'}></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Time*: </FormLabel>
                        <Row>
                            <Col><FormControl placeholder={'session'}></FormControl></Col>
                            <Col><FormControl placeholder={'time'}></FormControl></Col>
                        </Row>
                        <Row>
                            <Col><FormControl placeholder={'session'}></FormControl></Col>
                            <Col><FormControl placeholder={'time'}></FormControl></Col>
                        </Row>

                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Workload: </FormLabel>
                        <FormControl placeholder={'quiz'}></FormControl>
                        <FormControl placeholder={'HW'}></FormControl>
                        <FormControl placeholder={'midterm'}></FormControl>
                        <FormControl placeholder={'final'}></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Experience: </FormLabel>
                        <FormControl></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Suggestions: </FormLabel>
                        <FormControl></FormControl>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={addCourse}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={inform} onHide={closeInform}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        Add course request has been created and sent to administrator successfully
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={closeInform}>
                            Confirm
                        </Button>
                    </Modal.Footer>

            </Modal>
        </>

    );





    function addCourse(){
       handleClose()
        showInform()
    }
}

export default AddCourse