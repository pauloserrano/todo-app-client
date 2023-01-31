import styled from "styled-components"
import { Header, NavBar } from "../components"

export const MainLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (<>
    <Header />
    <MainLayoutWrapper>
      {children}
    </MainLayoutWrapper>
    <NavBar />
  </>
  )
}

MainLayout.Title = ({ children }: { children: JSX.Element | string }) => {
  return (
    <TitleWrapper>
      {children}
    </TitleWrapper>
  )
}

MainLayout.Subtitle = ({ children }: { children: JSX.Element | string }) => {
  return (
    <SubtitleWrapper>
      {children}
    </SubtitleWrapper>
  )
}

const MainLayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 140px);
  padding: 1rem 1.5rem;
  color: #FFF;
  overflow-y: auto;
`

const TitleWrapper = styled.h1`
  width: calc(100% - 10vw);
  margin: 0 auto;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  line-height: 1.3em;
  letter-spacing: 0.025em;
`

const SubtitleWrapper = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.75em;
`
