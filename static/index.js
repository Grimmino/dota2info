import regeneratorRuntime from "regenerator-runtime"
//sass
import 'normalize.css'
import './sass/style.sass'
//js
import './js/main'
//react
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"

import App from './components/app/App.jsx'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
)