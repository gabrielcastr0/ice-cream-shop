import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  main{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
  }
`;