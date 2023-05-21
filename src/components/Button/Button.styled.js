import styled from "styled-components";

export const Button = styled.button`
  color: #373737;
  background: #ebd8ff;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  text-align: center;
  align-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  padding-top: 14px;
  padding-bottom: 14px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: #5cd3a8;
  }

  ${({ following }) =>
    following &&
    `
    background: #5cd3a8;
  `}
`;
