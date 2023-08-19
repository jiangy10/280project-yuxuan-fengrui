import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import {Button, Container, Image, Form} from "react-bootstrap";
import CoursePage from "./Pages/CoursePage";
import ProfessorPage from "./Pages/ProfessorPage";
import logo from './logo.jpg'
import React, {useState} from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);

export default function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hrefLink,setHrefLink] = useState("/");


    return (
        <div>
            <Container style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', height:'100vh', width:'100vw'}}>
                <Container style={{flex:'3',backgroundColor:'#801400',width:'100vw',height:'100vh',display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
                    <Image src={logo} style={{width:'300px', height: "auto"}}></Image>
                </Container>
                <Container style={{flex:'7',width:'100vw',height:'100vh',display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <h1>Rose-Hulman Login</h1>
                    <Form>
                        <Form.Label style={{fontSize:'30px'}}>Username: </Form.Label>
                        <Form.Control
                            style={{fontSize:'25px'}}
                            onChange={e=>(setUsername(e.target.value))}
                            value={username}
                        ></Form.Control>
                    </Form>
                    <Form style={{marginTop:'10px'}}>
                        <Form.Label style={{fontSize:'30px'}}>Password:</Form.Label>
                        <Form.Control
                            style={{fontSize:'25px'}}
                            onChange={e=>(setPassword(e.target.value))}
                            value={password}
                        ></Form.Control>
                    </Form>
                    <Button onClick={login} style={{backgroundColor:'#801400',width:'100px', height:'40px',margin:'20px',color:'white',borderRadius:'5px'}}>Log In</Button>
                </Container>
            </Container>

        </div>
    );

    function login(){
        if(username.match("admin") && password.match("admin")){
            setHrefLink("/CoursePage/")
            console.log({hrefLink})
        }
    }

}
