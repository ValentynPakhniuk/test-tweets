import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  gap: 30px;
`;

export const BoxButton = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 20px;
`;

export const Progress = styled.h3`
  position: absolute;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -10%);
`;
