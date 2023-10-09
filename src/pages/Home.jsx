import React from 'react'
import Carusal from '../components/Carusal'
import Services from '../components/Services'
import Footer from '../components/Footer'
import ChooseUs from '../components/ChooseUs'
import ClientCounter from '../components/ClientCounter'

const Home = () => {
  return (
    <div>
      <Carusal />
      <Services />
      <ClientCounter />
      <ChooseUs />
      <Footer />
    </div>
  )
}

export default Home