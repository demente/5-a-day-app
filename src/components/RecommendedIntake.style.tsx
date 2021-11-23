import styled from "styled-components";

const AmountBarBackground = styled.div`
  padding: 6px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
  width: inherit;
`

const AmountBarFilled = styled.div`
  width: ${props => 100 < (props.defaultValue ?? 0)  ? '100%' : 5 > (props.defaultValue??0) ? '5%' : `${props.defaultValue}%`};
  background-color: #c99a9a;
  text-align: right;
  height: 18px;
  border-radius: 30px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
`

const RecommendedIntakeContainer = styled.table`
  width: 60%;
  margin-inline: auto;
  
  td:first-child {
    width: 20%;
  }
`;


const Name = styled.h3`
  text-transform: capitalize;
`;

export {AmountBarBackground, AmountBarFilled, RecommendedIntakeContainer, Name};
