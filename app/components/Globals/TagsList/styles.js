import Styled from 'styled-components';

const StyledTagsListWrapper = Styled.div``;
const StyledTagsListItemsWrapper = Styled.div`
  max-height: calc(${props => props.theme.defaultRem} * 20);
  overflow-y: auto;
`;
const StyledTagsListItem = Styled.div``;

export {
  StyledTagsListWrapper,
  StyledTagsListItemsWrapper,
  StyledTagsListItem,
};
