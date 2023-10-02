import styled from 'styled-components'

export const SaveCont = styled.div`
  display: flex;
  flex-direction: row;
`
export const SaveList = styled.div`
  width: 80%;
  background-color: ${props => props.bgColor};
  padding: 10px;
`
export const NoSave = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center
  align-items: center;
`
export const Head = styled.h1`
  color: ${props => props.textColor};
  font-size: 20px;
`
export const Nopara = styled.p`
  color: ${props => props.textColor};
`
export const Slider = styled.div`
  background-color: ${props => props.slideColor};
  width: 20%;
  height: 100vh;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SlideElements = styled.ul`
  list-style: none;
`
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
export const Contact = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  margin-left: 15px;
`
export const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin: 5px;
`
export const ContactContainer = styled.div`
  margin: 3px;
  padding: 10px;
`
export const LogoContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 45px;
`
export const HomeBut = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
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
