// import React from 'react'

function Home(props) {
  return (
    <div>
      Home Component
      <br/>
        Name: {props.name}
        <br/>
        Age: {props.age}
        <br/>
        Email: {props.obj.email}
        <br/>
        Phone: {props.obj.phone}
        <br/>
        Password: {props.obj.password}
    </div>
  )
}

export default Home
