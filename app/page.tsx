"use client";

import BtnContainer from "@/components/BtnContainer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import CardImage from "@/components/CardImage";
import CardText from "@/components/CardText";
import CardTitle from "@/components/CardTitle";
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
        <Card preset="darkgreen">
          <CardImage image="img01" />
          <CardContainer>
            <CardTitle>Our treat to you</CardTitle>
            <CardText>
              Join Starbucks® Rewards and savor our gift to you: a free drink
              with qualifying purchase during your first week. Valid for
              one-time use.*
            </CardText>
            <Button
              href="https://www.starbucks.com/account/create"
              preset="truelight"
            >
              Join now
            </Button>
          </CardContainer>
        </Card>
        <Card preset="purple">
          <CardImage image="img02" />
          <CardContainer>
            <CardTitle>Sunny-day essentials</CardTitle>
            <CardText>
              Flavorful creations sure to brighten any summer day.
            </CardText>
            <Button
              href="https://www.starbucks.com/menu/featured/"
              preset="truelight"
            >
              Order now
            </Button>
          </CardContainer>
        </Card>
        <Card preset="lightgreen">
          <CardImage image="img03" />
          <CardContainer>
            <CardTitle>Meet the Starbucks Pairings Menu</CardTitle>
            <CardText>
              Crave-worthy pairings including our new, best-ever iced coffee.
              Restrictions apply.
            </CardText>
            <Button
              href="https://www.starbucks.com/offers/pairings/"
              preset="darkergreen"
            >
              Learn more
            </Button>
          </CardContainer>
        </Card>
        <Card preset="green">
          <CardImage image="img04" />
          <CardContainer>
            <CardTitle>Personal cups for good</CardTitle>
            <CardText>
              Your choice is a positive and responsible one—because bringing
              your clean reusable cup helps our planet.
            </CardText>
            <Button
              href="https://stories.starbucks.com/press/2024/starbucks-becomes-first-national-coffee-retailer-to-accept-reusable-cups-for-drive-thru-and-mobile-orders/"
              preset="darkergreen"
            >
              Learn more
            </Button>
          </CardContainer>
        </Card>
      </Main>
    </>
  );
}
