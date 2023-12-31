import React from "react"
import styled from "styled-components/macro"

import { QUERIES, WEIGHTS } from "../../constants"
import Logo from "../Logo"
import Icon from "../Icon"
import UnstyledButton from "../UnstyledButton"
import SuperHeader from "../SuperHeader"
import MobileMenu from "../MobileMenu"
import VisuallyHidden from "../VisuallyHidden"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <NavText>Sale</NavText>
            <BoldNavText>Sale</BoldNavText>
          </NavLink>
          <NavLink href="/new">
            <NavText>New&nbsp;Releases</NavText>
            <BoldNavText>New&nbsp;Releases</BoldNavText>
          </NavLink>
          <NavLink href="/men">
            <NavText>Men</NavText>
            <BoldNavText>Men</BoldNavText>
          </NavLink>
          <NavLink href="/women">
            <NavText>Women</NavText>
            <BoldNavText>Women</BoldNavText>
          </NavLink>
          <NavLink href="/kids">
            <NavText>Kids</NavText>
            <BoldNavText>Kids</BoldNavText>
          </NavLink>
          <NavLink href="/collections">
            <NavText>Collections</NavText>
            <BoldNavText>Collections</BoldNavText>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`

const NavLink = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const NavText = styled.span`
  display: block;
  transform: translateY(0);
  transition: transform 300ms;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${NavLink}:focus,
    ${NavLink}:hover & {
      transform: translateY(-100%);
      transition: transform 300ms;
    }
  }
`

const BoldNavText = styled(NavText)`
  position: absolute;
  font-weight: ${WEIGHTS.bold};
`

export default Header
