import React from 'react'
import { Login } from './Login'
import rocketImg from '../assets/rocket.png'

export const LoginComponent = () => {
    return (
      <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Login />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
    )
  }
