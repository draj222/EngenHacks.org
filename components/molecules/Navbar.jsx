import { styled, css } from "~stitches";
import { Link } from "@components/atoms";
import Logo from '@assets/engenhackslogo.webp';
import Image from 'next/image';
import { BrowserView, MobileView } from 'react-device-detect';
import { Squash as Hamburger } from 'hamburger-react';

const Wrapper = styled("navbar", css({
  position: "fixed",
  width: "100%",
  boxSizing: "border-box",
  minHeight: "80px", // Change the height to minHeight
  background: "rgb(13, 13, 13)",
  zIndex: "10",
  borderBottom: '1px solid',
  borderImageSource: "white",
  borderImageSlice: 1,
}));


const Links = styled("div", css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "30px",
  padding: "0px",
  gap: "41px",
  flexDirection: "row",
  position: "absolute",
  height: "24px",
  right: "45px",
  top: "28px",
}));

const LinksMobile = styled("div", ({
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  display: "none",
  gap: "10px",
  top: "100px", // Adjust the top position to provide space below the navbar
}));




const LogoDiv = styled("div", ({
  position: 'absolute',
  maxWidth: '130px',
  maxHeight: '130px',
  minWidth: '80px',
  minHeight: '80px',
  width: "20%",
  left: '10%',
  top: '0px',
  transform: 'translateX(-50%)', //
}));


const HamburgerWrapper = styled("div", ({
  position: 'absolute',
  right: '15px',
  top: '15px',

}));

export const Navbar = (props) => {
  function changeNavBar(toggled) {
    const navbar = document.getElementById("navbar");
    const mobileLinks = document.getElementById("mobile-links");
  
    if (toggled) {
      navbar.style.height = `${navbar.scrollHeight}px`; // Set the height to the full scroll height
      mobileLinks.style.display = 'flex';
    } else {
      navbar.style.height = '80px';
      mobileLinks.style.display = 'none';
    }
  }
  

  return (
    <Wrapper id="navbar">
      <LogoDiv>
        <Image src={Logo} alt='official logo'></Image>
      </LogoDiv>
      <BrowserView>
        <Links id="links">
          <Link href="#About" target="_self">About</Link>
          <Link href="#Sponsors" target="_self">Sponsors</Link>
          <Link href="#Guest" target="_self">Guests</Link>
          <Link href="#Team" target="_self">Team</Link>
          <Link href="#FAQ" target="_self">FAQ</Link>
        </Links>
      </BrowserView>
      <MobileView>
        <HamburgerWrapper>
          <Hamburger rounded size={30} zIndex="10000" onToggle={toggled => { changeNavBar(toggled); }} />
        </HamburgerWrapper>
        <LinksMobile id='mobile-links'>
          <Link href="#About" target="_self">About</Link>
          <Link href="#Sponsors" target="_self">Sponsors</Link>
          <Link href="#Guest" target="_self">Guests</Link>
          <Link href="#Team" target="_self">Team</Link>
          <Link href="#FAQ" target="_self">FAQ</Link>
        </LinksMobile>
      </MobileView>
    </Wrapper>
  );
};