import css from 'styled-jsx/css';

export default css`
  $color-sassy: #cc4397;
  $color-blue: #0059ff;

    .app {
      color: $color-blue;
      font-size: 2rem;
      text-align: center; 
      .sassyDiv {
        font-size: '50px';
        color: $color-sassy;
      }
    }
    
`;