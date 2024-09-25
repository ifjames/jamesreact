import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, App1, App2} from './App'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <App1 />
    <App2 />
  </React.StrictMode>,
);