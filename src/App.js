import React from 'react';
import Banner from './Componentes/Banners/Banner';
import Form from './Componentes/Form/Form';
import Team from './Componentes/Team/Team';
import Footer from './Componentes/Footer/Footer';

function App() {

  const teams = [
    {
      name: '',
      corPrimaria: '#5b6278',
      corSecundária: '#ffa7e9'
    },
    {
      name: 'Operacional',
      corPrimaria: '#57c278',
      corSecundária: '#d9f7e9'
    },
    {
      name: 'Financeiro',
      corPrimaria: '#B2CFFA',
      corSecundária: '#e8f8ff'
    },
    {
      name: 'Pessoas e Cultuta',
      corPrimaria: '#a6d157',
      corSecundária: '#f0f8e2'
    },
    {
      name: 'Comercial',
      corPrimaria: '#e06b69',
      corSecundária: '#fde7e8'
    },
    {
      name: 'Tecnologia da Informação',
      corPrimaria: '#ffba05',
      corSecundária: '#fff5d9'
    },
  ]

  const [peaple, setPeaple] = React.useState([])
  
  const newPersonRegistred = (person) => {
    setPeaple([...peaple, person])
  }

  return (
    <div>
      <Banner /> 
      <Form teams={teams.map(team => team.name)} personRegistred={person => newPersonRegistred(person)} />

      {teams.map(team => <Team 
        corPrimaria={team.corPrimaria} 
        corSecundária={team.corSecundária} 
        key={team.name} 
        name={team.name}
        peaple = {peaple.filter( person => person.team === team.name)}
      />)}
      <Footer />
    </div>  
  );
}

export default App;
