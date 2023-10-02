import styled from 'styled-components'

export const HomeBg = styled.div`
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
export const HomeBut = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
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
export const VideoContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 80%;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  width: 100%;
  padding: 5px;
`
export const BannerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
`
export const NxtImage = styled.img`
  height: 40px;
  width: 150px;
`
export const Close = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const NxtVideos = styled.div`
  padding: 15px;
`
export const SearchInput = styled.input`
  background-color: transparent;
  color: ${props => props.TextColor};
  height: 25px;
  width: 300px;
`
export const SearchButton = styled.button`
  background-color: ${props => props.buttonBg};
  border-width: 1px;
  padding: 5px;
  height: 27px;
  width: 50px;
  cursor: pointer;
`
export const VideoList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
