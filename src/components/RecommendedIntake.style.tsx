import styled from "styled-components";

const AmountBarBackground = styled.div`

  padding: 6px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);

`

const AmountBarFilled = styled.div`
    width: ${props => `${props.defaultValue}%`};
    background-color: #c99a9a;
    text-align: right;
    height: 18px;
    border-radius: 30px;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
`

const RecommendedIntakeContainer = styled.div    `
      width: 60%;
      margin-inline: auto;
    `;

const RecommendedIntakeRow = styled.div`
  
`;

const Name = styled.div`
`;

export {AmountBarBackground, AmountBarFilled, RecommendedIntakeContainer, RecommendedIntakeRow, Name};
