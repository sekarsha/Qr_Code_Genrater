import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import"./Qcode.css"
import { Card } from './Card.jsx'
import { Qcode } from './Qcode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <div className=' d-flex '>
      <div className=' row'>
      <Card/>
      </div>

      
    
    </div> */}

        <Qcode/>
   
  </React.StrictMode>,
)
