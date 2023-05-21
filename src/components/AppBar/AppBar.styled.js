import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-bottom: 40px;
  border-bottom: 1px solid #646cff;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(100, 108, 255, 0.23);
  & nav {
    display: flex;
    gap: 150px;
    margin: 15px auto;
  }
`;
