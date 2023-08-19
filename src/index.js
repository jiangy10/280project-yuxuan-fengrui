import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import CoursePage from "./Pages/CoursePage";
import ProfessorPage from "./Pages/ProfessorPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/*<App />*/}
      <BrowserRouter>
          <Routes>
              <Route path={"/*"} element={<App/>}/>
              <Route path={'/CoursePage/*'} element={<CoursePage />} />
              <Route path={'/ProfessorPage/*'} element={<ProfessorPage/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
