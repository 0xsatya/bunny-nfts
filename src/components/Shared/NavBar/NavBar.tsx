import React, { useState, useEffect, ReactChild } from 'react'
import Image from 'next/image'
import { Discord, Twitter, Telegram, Medium } from '../../../icons/Icons'
import {
  DISCORD_LINK,
  TWITTER_LINK,
  MEDIUM_LINK,
  TELE_LINK,
} from '../../../utils/Links'
const animationTimeout = 400
import HamburguerLine from './HamburguerLine'
import adjustScroll from './adjustScroll'
import { IconLink } from '../../../icons/icon'

import {
  Nav,
  NavLink,
  Group,
  Logo,
  Hamburguer,
  NavMobile,
  BubblesImage,
  MobileInner,
  SocLinks,
} from './NavStyle'

import { DesktopLinkType, MobileLinkType, Sections } from './NavTypes'
import MobileLink from './MobileLink'
import ConnectButton from '../ConnectButton/ConnectButton'

const NavBar = (props: any) => {
  const [navMobilePosition, setNavMobilePosition] = useState('100%')
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const { onConnectWallet, ...userData } = props
  // console.log(userData);

  //the page has too many itens and this supports the scroll navigation on every click
  const [positionFix, setPositionFix] = useState({
    about: 0,
    rabbit: 0,
    roadmap: 0,
    faq: 0,
  })

  //the support function that adjust every fix due the screen width
  const resizeEventHandle = () => {
    adjustScroll(setPositionFix, window.innerWidth)
  }

  //only monitors the screen width to adjust every fix
  useEffect(() => {
    resizeEventHandle()
    window.addEventListener('resize', resizeEventHandle)
    return () => {
      window.removeEventListener('resize', resizeEventHandle)
    }
  }, [])

  //responsible to show and hide the mobile menu
  const toggleNavMobile = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
    setNavMobilePosition(isMobileNavOpen ? '100%' : '0')
  }

  //handles both the mobile and deskop link click
  const handleClick = (href: Sections) => {
    const getHref = document.getElementById(href) as HTMLElement
    const valueOfFix = positionFix[href]
    window.scrollBy({
      top: getHref.getBoundingClientRect().top + valueOfFix,
      behavior: 'smooth',
    })
  }

  const DesktopLink = ({ href, children }: DesktopLinkType) => {
    return (
      <NavLink>
        <a onClick={() => handleClick(href)}>{children}</a>
      </NavLink>
    )
  }

  const MobileLinkPrep = ({
    href,
    children,
  }: {
    href: Sections
    children: ReactChild
  }) => {
    return (
      <MobileLink
        toggleNavMobile={toggleNavMobile}
        handleClick={handleClick}
        animationTimeout={animationTimeout}
        href={href}
      >
        {children}
      </MobileLink>
    )
  }

  return (
    <Nav>
      <Group>
        <Logo>
          <Image width={217} height={92} src="/img/icon-main.png" alt="" />
        </Logo>
        {/* <DesktopLink href="about">About</DesktopLink> */}
        {/* <DesktopLink href="rabbit">Down the Rabbit Hole</DesktopLink>
        <DesktopLink href="roadmap">Roadmap</DesktopLink> */}
      </Group>
      <Group>
        <IconLink href={DISCORD_LINK}>
          <Discord />
        </IconLink>
        <IconLink href={TWITTER_LINK}>
          <Twitter />
        </IconLink>
        <IconLink href={TELE_LINK}>
          <Telegram />
        </IconLink>
        <ConnectButton {...props} />
      </Group>
      {/* <Hamburguer isOpen={isMobileNavOpen} onClick={toggleNavMobile} animationTimeout={animationTimeout}>
        <HamburguerLine />
        <HamburguerLine />
        <HamburguerLine />
      </Hamburguer>
      <NavMobile left={navMobilePosition}>
        <MobileInner>
          <MobileLinkPrep href="about">About</MobileLinkPrep>
          <MobileLinkPrep href="rabbit">Down the Rabbit Hole</MobileLinkPrep>
          <MobileLinkPrep href="roadmap">Roadmap</MobileLinkPrep>
          <MobileLinkPrep href="faq">FAQ</MobileLinkPrep>
          <BubblesImage>
            <Image
              width={750}
              height={378}
              src="/img/bubbles_purple.png"
              alt=""
            />
          </BubblesImage>
        </MobileInner>
      </NavMobile> */}
    </Nav>
  )
}

export default NavBar
