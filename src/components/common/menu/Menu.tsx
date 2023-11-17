import styled from "@emotion/styled";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 120px;
  max-height: calc(100vh - 200px);
  padding: 5px 0;
  flex-grow: 1;
  overflow-y: scroll;
  box-sizing: border-box;
  z-index: 40;
`;

export default Menu;
