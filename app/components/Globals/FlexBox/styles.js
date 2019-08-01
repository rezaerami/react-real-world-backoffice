import styled from 'styled-components';
/* eslint-disable prettier/prettier */
const StyledFlexBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
  > * {
    flex: 0 0 auto;
    width: ${props =>
    props.perSlide === 'auto' ? 'auto' : `calc(100% / ${props.perSlide})`};
  }
`;
export { StyledFlexBoxContainer };
