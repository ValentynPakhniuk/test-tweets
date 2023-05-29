import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  background-image: url('../../images/cardBackgroundImage.png'),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  /* background-position: 28px 36px, 20px 20px, 0 0; */
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  overflow: hidden;
  z-index: 0;
  /* & article { */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* position: relative; */
  /* overflow: hidden; */
  /* z-index: 0; */
  /* } */
`;

// export const CardBackgroundImage = styled.img`
//   margin-top: 28px;
//   margin-bottom: 18px;
// `;

export const BoxLogo = styled.div`
  position: relative;
  & img {
    position: absolute;
    top: 20px;
    right: 85px;
  }
`;

export const BoxLineImage = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 62px;
`;

export const EllipseAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: relative;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  margin-top: 175px;
  margin-bottom: 24px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 152px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06) inset 0px -1.71846px
        3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    top: 50%;
    left: -150px;
    transform: translate(0, -50%);
    z-index: -1;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 152px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    top: 50%;
    right: -150px;
    transform: translate(0, -50%);
    z-index: -1;
  }
`;

export const ImageAvatar = styled.img`
  width: 65px;
  height: 65px;
  position: absolute;
  border-radius: 50px;
  line-height: 0;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
`;

export const BoxParagraph = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  text-align: center;
  margin-bottom: 26px;
  & p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #ebd8ff;
  }
`;
