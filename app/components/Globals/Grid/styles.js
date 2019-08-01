import Styled from 'styled-components';
const StyledGrid = Styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    width: calc(100% / ${props => props.perRow});
    border: solid calc(${props => props.theme.defaultRem} * 0) ${props =>
  props.theme.colors.borderColor};
    border-top-color: ${props => props.theme.colors.white};
    border-right-color: ${props => props.theme.colors.white};
    &:nth-child(3n){
      border-left-color: ${props => props.theme.colors.white};
    }
  }
`;
export { StyledGrid };
