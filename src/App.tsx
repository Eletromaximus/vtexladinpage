import { useEffect, useState } from 'react'

// import useCounter from './hooks/useCounter'
import { AppStyle, Background1, Background2 } from './theme/LandingStyle'

function calculateDate () {
  const fridayDate = new Date('07/18/2021')
  const today = new Date()

  const diff = fridayDate.getTime() - today.getTime()

  if (diff > 0) {
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    }
  } else {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
}
function App () {
  const [counter, setCounter] = useState(calculateDate())

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(calculateDate())
    }, 1000)

    return () => clearTimeout(timer)
  }, [counter])

  return (
    <AppStyle>

      <Background1>
        <h1 id="text1">
          Black Friday
        </h1>
        <h1 id="text2">
          Summer
        </h1>

        <div id="timer">
          <div id="infos">
            <span>Dias</span>
            <span>Horas</span>
            <span>Min.</span>
            <span>Secon.</span>
          </div>

          <div id="display">
            <h1>{counter.days}</h1>
            <h1>{counter.hours}</h1>
            <h1>{counter.minutes}</h1>
            <h1>{counter.seconds}</h1>
          </div>
        </div>

      </Background1>

      <Background2>
        <div id="formulario">

          <div id="oferta">
            <p>
              Receba ofertas exclusivas nesse verão!
              Registres-se para não perder essa super oportunidade!
            </p>
          </div>

          <form action="">

            <div>
              <span>Nome:</span>
              <input type="text" name="nome" />

              <span>Email:</span>
              <input type="text" name="email" />
            </div>

          </form>
        </div>
      </Background2>

    </AppStyle>
  )
}

export default App
