import styled from 'styled-components'

export const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
export const Background1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  background-image: url('/images/capcom.jpg');
  background:
    linear-gradient(
      rgba(0,0,0,0.5),
      rgba(0, 0, 0, 0.6)
    ),
    url('/images/capcom.jpg');
  color: whitesmoke;

  h1 {
    font-family: 'Press Start 2P';
    font-size: 96px;
    line-height: 96px;
    padding: 0;
  }

  #text1 {
    margin: 20px auto auto 10px;
    color: #F800FD;
  }
  #text2   {
    margin: 20px auto auto 50%;
    color: #F0F410;
  }

  #timer {
    flex-direction: column;
    align-items: center;

    #display {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 738px;
      height: 167px;

      
      border-radius: 20px;
      background-color: #231111;

      h1 {
        margin: auto 38px;
        font-family: 'Roboto';
      }
    }

    #infos {
      width: 659px;
      height: 69px;
      /* margin-left: 25%; */
      justify-content: space-between;
      align-items: center;

      background: #1C1919;
      border-radius: 20px;

      span {
          // font-family: ;
        font-size: 36px;
        line-height: 24px;
        margin: 50px;
      }
    }
  }
`
export const Background2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  mix-blend-mode: overlay;

  background:
    linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0, 0, 0, 0.6)
      ),
    url('/images/capcom3.jpg');

  #formulario {
    display: flex;
    flex-direction: column;
    width: 490px;
    height: 480px;

    background: rgba(77, 68, 68, 0.8);
    border-radius: 20px;
    color: whitesmoke;

    #oferta {
      width: 490px;
      height: 146px;

      background: #4263D7;
      border-radius: 20px;
      font-size: 30px;

      p {
        margin: 20px;
      }
      
    }  

    form {
      div {
        flex-direction: column;
        height: 100%;

        span {
          font-family: 'Press Start 2P';
          font-size: 24px;
          line-height: 24px;
          padding-top: 50px;
          margin-left: 47px;
        }

        input {
          color: whitesmoke;
          margin: auto 47px;
          font-size: 24px;
          height: 56px;
          background: #545454;
          border: 4px solid #E8FB0F;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    } 
          
    
  }
`
