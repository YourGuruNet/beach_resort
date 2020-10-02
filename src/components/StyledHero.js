import styled from "styled-components";

const StyledHero = styled.header`
  min-height: 60vh;  /*This is one more whey how to set default img */
  background: url(${props => props.img}) center/cover no-repeat; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;

/*background: url(${props => props.img ? props.img : this.state.defaultImg}) center/cover no-repeat; 
This is a whey how to set default img in exact styled component!
*/