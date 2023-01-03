import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  const {setCurrency, ...context} = useContext(AppContext)

  return (
    <div className={`navbar ${context.theme}`}>
      <span></span>
      <div className="right">
        <span>
          <div>
          <Button variant={context.theme} onClick={context.toggleTheme}>
            {context.theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
          </div>
        </span>
        <span>
          <div>
          <Dropdown>
            <Dropdown.Toggle variant={context.theme} id="dropdown-basic">
              {context.currency}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setCurrency('USD')}>
                USD
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCurrency('EUR')}>
                EUR
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCurrency('PKR')}>
                PKR
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </span>
        <span>
          <div>
          Cart
          <span className={`itemCount itemCount-${context.theme}`}>
            {context.cart.length}
          </span>
          </div>
        </span>
        <span>
          <div>
          Hello,&nbsp;
          {context.username ? context.username : 'User'}
          </div>
        </span>
      </div>
    </div>
  )
}

export default Navbar