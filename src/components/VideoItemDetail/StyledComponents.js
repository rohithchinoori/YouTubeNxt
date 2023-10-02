import styled from 'styled-components'

export const VideoHome = styled.div`
  display: flex;
  flex-direction: row;
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
export const VideoPlayer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const FailedImage = styled.img`
  height: 200px;
  width: 200px;
`
export const FailureHead = styled.h1`
  color: ${props => props.fail};
  font-size: 22px;
`
export const Retry = styled.button`
  background-color: #3b82f6;
  color: #fff;
  border-width: 0px;
  border-radius: 6px;
  cursor: pointer;
`
export const Para = styled.p`
  color: ${props => props.textColor};
  font-size: 18px;
  font-family: 'Roboto';
`
export const Views = styled.p`
  color: #7e858e;
`
export const LikeSave = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Li = styled.li`
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: row;
`
export const Profile = styled.img`
  height: 35px;
  width: 30px;
  margin-top: 15px;
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
