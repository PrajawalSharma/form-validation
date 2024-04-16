import React from 'react'
import { Signup } from './Signup'
import rocketImg from '../assets/rocket.png'

export const SignupComponent = () => {
  return (
    <div className="container mt-3">
    <div className="row">
      <div className="col-md-5">
        <Signup />
      </div>
      <div className="col-md-7 my-auto">
        <img className="img-fluid w-100" src={rocketImg} alt=""/>
      </div>
    </div>
  </div>
  )
}
