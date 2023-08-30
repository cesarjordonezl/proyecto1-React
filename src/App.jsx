import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import phrases from './utils/phrases.json'
import getRamdomElemArray from './utils/getRandomElemArray'


function App() {
  
  const phraseRandom = getRamdomElemArray(phrases)
  const numberRandom = getRamdomElemArray([1,2,3,4])

  const [quote, setQuote] = useState(phraseRandom)
  const [numberBg, setNumberBg] = useState(numberRandom)

  const bgStyle = {
   // backgroundImage:'url(/fondo${numberBg}.jpg)' 
   backgroundImage:`url(/fondo${numberBg}.jpg)`
  }

  return (
  <div className='container' style={bgStyle}>
<h1 className='container_title'>Promesas de Dios para Ti</h1>

<Quote phrase= {quote} />

<BtnQuote phrases={phrases} 
setQuote={setQuote} 
setNumberBg={setNumberBg} 
/>
  </div>
  )
}

export default App
