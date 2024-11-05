import React from 'react'
import Input from '../Inputs/Input'
import './form.css'
import Select from '../Dropdown/Select'
import Button from '../Button/Button'

const Form = ({personRegistred, teams}) => {
  const [name, setName] = React.useState('')
  const [position, setPosition] = React.useState('')
  const [image, setImage] = React.useState('')
  const [team, setTeam] = React.useState('')


  const submit = (e) => {
    e.preventDefault();
    personRegistred({
      name,
      position,
      image,
      team,
    })
    setImage('')
    setName('')
    setPosition('')
    setTeam('')
  }

  return (
    <section className='form'>  
        <form onSubmit={submit}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <Input 
              required={true} 
              label={"Nome"} 
              placeholder='Digite seu Nome'
              value ={name}
              valueAtt={value => setName(value)}
            />
            <Input 
              required={true} 
              label={"Cargo"} 
              placeholder='Digite seu Cargo'
              value = {position}
              valueAtt={value => setPosition(value)}
            />
            <Input 
              label={"Imagem"} 
              placeholder='Digite o endereço da imagem'
              value = {image}
              valueAtt={value => setImage(value)}  
            />
            <Select 
              required={true} 
              itens={teams} 
              label={'Times'}
              value={team}
              valueAtt={value => setTeam(value)}

             />
            <Button>Criar Card</Button>
        </form>
    </section>
  )
}

export default Form
