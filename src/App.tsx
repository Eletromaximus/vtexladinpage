import { AppStyle, Background1, Background2 } from './theme/LandingStyle'

function App () {
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
            <span>Dia</span>
            <span>Hora</span>
            <span>Min</span>
            <span>Sec</span>
          </div>

          <div id="display">
            <h1>00</h1>
            <h1>00</h1>
            <h1>00</h1>
            <h1>00</h1>
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
