import React from 'react'
import { Flex } from './Flex'
import CarIcon from '../assets/cart.svg'
export const Header = () => {
  return (
    <header style={{ background: '#F37226' }}>
      <Flex justify="space-between">
      <img
        className="home"
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div className="total">
        <div>
        <img src={CarIcon} alt="React Logo" />
        </div>
        <p>
          $ 0
        </p>
        </div>
      </Flex>
    </header>
  )
}
