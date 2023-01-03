import { useContext } from 'react'

import Button from 'react-bootstrap/Button';

import Navbar from './components/Navbar'
import NameForm from './components/NameForm'
import Total from './components/Total'

import Content from './components/Content'

import { AppContext } from './context/AppContext'

export default function App() {
  const context = useContext(AppContext)

  return (
    <main className={context.theme}>
      <Navbar />
      <Content />
      <Total />
      <NameForm />
    </main>
  )
}
