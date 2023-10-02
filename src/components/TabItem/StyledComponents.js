import styled from 'styled-components'

export const List = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const ListPara = styled.p`
  color: ${props => props.TextColor};
  margin: 10px;
  font-weight: 500;
`
