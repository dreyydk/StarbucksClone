"use client";

import BtnContainer from "@/components/BtnContainer";
import Button from "@/components/Button";
import DesktopLink from "@/components/DesktopLink";
import DesktopNav from "@/components/DesktopNav";
import Fade from "@/components/Fade";
import FindStoreBtn from "@/components/FindStoreBtn";
import Header from "@/components/Header";
import HeaderLogo from "@/components/HeaderLogo";
import Line from "@/components/Line";
import Main from "@/components/Main";
import MenuIcon from "@/components/MenuIcon";
import MobileLink from "@/components/MobileLink";
import MobileNav from "@/components/MobileNav";
import MobileNavContainer from "@/components/MobileNavContainer";
import NavContainer from "@/components/NavContainer";
import useActive from "@/hooks/useActive";

export default function Home() {
  const { active, handleActive } = useActive();

  return (
    <>
      <Header>
        <NavContainer>
          <HeaderLogo />
          <DesktopLink href="https://www.starbucks.com/menu">MENU</DesktopLink>
          <DesktopLink href="https://www.starbucks.com/rewards">
            REWARDS
          </DesktopLink>
          <DesktopLink href="https://www.starbucks.com/gift">
            GIFT CARDS
          </DesktopLink>
        </NavContainer>
        <MenuIcon active={active} onClick={handleActive} />
        <MobileNav active={active}>
          <MobileNavContainer>
            <MobileLink href="https://www.starbucks.com/menu">Menu</MobileLink>
            <MobileLink href="https://www.starbucks.com/rewards">
              Rewards
            </MobileLink>
            <MobileLink href="https://www.starbucks.com/gift">
              Gift Cards
            </MobileLink>
            <Line />
            <BtnContainer>
              <Button
                href="https://www.starbucks.com/account/signin?ReturnUrl=%2F"
                preset="light"
              >
                Sign in
              </Button>
              <Button
                href="https://www.starbucks.com/account/create"
                preset="dark"
              >
                Join now
              </Button>
            </BtnContainer>
            <FindStoreBtn />
          </MobileNavContainer>
        </MobileNav>
        <DesktopNav>
          <FindStoreBtn />
          <BtnContainer>
            <Button
              href="https://www.starbucks.com/account/signin?ReturnUrl=%2F"
              preset="light"
            >
              Sign in
            </Button>
            <Button
              href="https://www.starbucks.com/account/create"
              preset="dark"
            >
              Join now
            </Button>
          </BtnContainer>
        </DesktopNav>
      </Header>
      <Fade active={active} />
      <Main>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "var(--font01)",
          }}
        >
          Under development!
        </h1>
        <p
          style={{
            textAlign: "center",
            margin: "20px",
            fontFamily: "var(--font01)",
          }}
        >
          This section of the site is still under development, keep an eye on
          the repository for updates!
        </p>
        <a
          href="https://github.com/dreyydk"
          style={{
            fontFamily: "var(--font01)",
            textDecoration: "none",
            color: "var(--black)",
            fontSize: "18px",
            fontWeight: 500,
            marginBottom: "10px",
          }}
          target="_blank"
        >
          <i className="bi bi-github"></i>
          <span style={{ marginLeft: "5px" }}>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/andreibacin"
          style={{
            fontFamily: "var(--font01)",
            textDecoration: "none",
            color: "var(--black)",
            fontSize: "18px",
            fontWeight: 500,
            marginBottom: "10px",
          }}
          target="_blank"
        >
          <i className="bi bi-linkedin"></i>
          <span style={{ marginLeft: "5px" }}>LinkedIn</span>
        </a>
      </Main>
    </>
  );
}
