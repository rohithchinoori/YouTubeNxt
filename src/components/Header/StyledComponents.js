import styled from 'styled-components'

export const HeaderBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: ${props => props.bgColor};
`
export const NxtImage = styled.img`
  height: 40px;
  width: 150px;
  margin-left: 20px;
`
export const HeaderItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`
export const HeaderList = styled.li`
  margin: 10px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border-width: 1px;
  border-color: ${props => props.ButColor};
  color: ${props => props.ButColor};
  height: 30px;
  width: 100px;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`
export const ThemeImage = styled.img`
  height: 30px;
  width: 30px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const PopupBut = styled.button`
  padding: 5px;
  background-color: transparent;
  color: #cccccc;
  border-color: #cccccc;
  border-radius: 6px;
`
export const PopupBut1 = styled.button`
  padding: 5px;
  background-color: transparent;
  color: #fff;
  background-color: #3b82f6;
  border-radius: 6px;
  margin: 15px;
`
