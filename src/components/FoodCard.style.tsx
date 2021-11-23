import styled from "styled-components";

const StyledCard = styled.div`
  display: inline-block;
  width: 240px;
  text-align: center;
  margin: 20px;
`;

const ImageContainer = styled.div`
    height: 200px;
    width: 200px;
    overflow: hidden;
    border-radius: 50%;
    display: inline-block;

    img {
      transform: translate(-50%, -50%);
      position: relative;
      width: 50%;
      top: 40%;
      left: 28%;
    }
`;


const ImageSkew = styled.div`
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  padding: 0px;
  font-size: 0px;
  background: #c99a9a;
  height: 250px;
  width: 200px;
`

const Description = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 120px 20px 20px 20px;
  border-radius: 20px;
  background: #fff;
  margin: -120px 0px 0px 0px;
  line-height: 19px;
  font-size: 14px;`;

export {StyledCard, ImageContainer, ImageSkew, Description};
