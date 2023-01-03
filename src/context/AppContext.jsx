import React, {useState, createContext} from 'react';

const AppContext = createContext()

const AppContextProvider = (props) => {
  const [username, setUsername] = useState('')
  const [theme, setTheme] = useState('dark')
  const [cart, setCart] = useState([])
  const [currency, setCurrency] = useState('USD')

  const addToCart = (item) => {
    setCart(prev => [...prev, item])
  }
  
  const removeFromCart = (id) => {
    setCart(prevItems => prevItems.filter(item => item.id !== id))
  }

  const emptyCart = () => {
    setCart([])
  }
  
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  return (
    <AppContext.Provider
      value={{
        username,
        setUsername,
        theme,
        toggleTheme,
        cart,
        addToCart,
        removeFromCart,
        emptyCart,
        currency,
        setCurrency
      }}
    >
      {props.children}
    </AppContext.Provider>    
  )
}

export {AppContextProvider, AppContext}