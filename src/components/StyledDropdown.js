import styled from 'styled-components'

export const DropdownMenu = styled.div`
  z-index:10;
  background: var(--main1) !important;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  .dropdown-item {
    text-transform: capitalize;
    font-size: 1.3rem;
    justify-self: center !important;
    color: var(--mainWhite) !important;
    &:hover {
      color: var(--main1) !important;
    }
  }
`;