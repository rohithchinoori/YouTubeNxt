import styled from 'styled-components'

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
export const Text = styled.p`
  color: ${props => props.textColor};
  font-size: 20px;
  width: 350px;
`
export const Para = styled.p`
  color: #383838;
`
export const Thumb = styled.img`
  height: 150px;
  width: 350px;
  margin: 10px;
`
