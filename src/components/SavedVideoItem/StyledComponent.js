import styled from 'styled-components'

export const Card = styled.li`
  display: flex;
  flex-direction: row;
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
export const Nav = styled.div`
  background-color: ${props => props.navColor};
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`
export const IconCont = styled.div`
  border-style: solid;
  border-width: 0px;
  border-radius: 40px;
  padding: 10px;
  background-color: ${props => props.iconCont};
`
export const Title = styled.h1`
  color: ${props => props.TextColor};
  font-size: 23px;
  font-family: 'Roboto';
  margin-left: 10px;
`
