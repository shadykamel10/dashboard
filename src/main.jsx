import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashbord from './pages/dashboard/Dashboard.jsx';
import Contact from './pages/contact/Contact.jsx';
import Team from './pages/team/Team.jsx';
import Invoices from './pages/Invoices/Invoices.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Form from './pages/form/Form.jsx';
import Calender from './pages/calender/Calender.jsx';
import Faq from './pages/Faq/Faq.jsx';
import Bar from './pages/Bar/Bar.jsx';
import Pie from './pages/pie/pie.jsx';
import Line from './pages/Line/Line.jsx';
import Geoghraphy from './pages/Geoghraphy/Geoghraphy.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashbord />} />
      <Route path='contact' element={<Contact />} />
      <Route path='team' element={<Team />} />
      <Route path='contact' element={<Contact />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path="profile" element={<Profile />} />
      <Route path="form" element={<Form />} />
      <Route path="calender" element={<Calender />} />
      <Route path='faq' element={<Faq/>} />
      <Route path='bar' element={<Bar/>} />
      <Route path='pie' element={<Pie/>} />
      <Route path='line' element={<Line/>} />
      <Route path='geoghraphy' element  = {<Geoghraphy/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
