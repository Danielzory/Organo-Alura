import React from 'react'
import './team.css'
import Card from '../Card/Card'

const Team = (props) => {
    const css ={backgroundColor: props.corSecundária}
   

  return (
    (props.peaple.length > 0) &&    //se for maior que zero faça...
      <section className='team' style={css}>
        <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>

        <div className='cards'>
          {props.peaple.map(person => <Card background={props.corPrimaria} key={person.name} name={person.name} position={person.position} image={person.image}/>)}
        </div>
      </section>
  )
}

export default Team
