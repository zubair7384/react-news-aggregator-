import React from "react";
import Search from "./custom_search";
import worldBanner from "../assets/banner-image.jpg";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <StyledHeaderWrapper isHome={isHome}>
      <StyledNav className="container flex-between">
        <StyledLogo isHome={isHome}>
          <Link to="/">The News</Link>
        </StyledLogo>
        {!isHome && <Search />}
        <StyledList isHome={isHome}>
          {[
            {
              key: "1",
              name: "All Filters",
              link: "/search",
            },
            {
              key: "2",
              name: "More",
              link: "/search",
            },
          ].map((item) => (
            <StyledLink isHome={isHome} key={item.key}>
              <Link to={item.link}>{item.name}</Link>
            </StyledLink>
          ))}
        </StyledList>
      </StyledNav>
      {isHome && (
        <SearchWrapper>
          <MainTitle>
            Discover the latest and trending news from around the globe.
          </MainTitle>
          <Search />
        </SearchWrapper>
      )}
    </StyledHeaderWrapper>
  );
};

export default Header;

const StyledHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.isHome ? "500px" : "80px")};
  overflow: hidden;
  background: ${(props) => (props.isHome ? "transparent" : "#fff")};
  border-bottom: ${(props) => (!props.isHome ? "1px solid #0000002b" : "none")};

  &::before {
    content: "${(props) => (props.isHome ? "" : "none")}";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${(props) =>
      props.isHome ? `url(${worldBanner})` : "none"};
    background-position: center;
    background-size: cover;
    // background-repeat: no-repeat;
    z-index: -1;
  }
`;
const StyledLogo = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 26px;
  a {
    color: ${(props) => (props.isHome ? `#fff` : "#000")};
  }
`;
const StyledNav = styled.div`
  padding: 12px 0;
`;
const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
  font-size: 16px;
  font-weight: 600;
`;
const StyledLink = styled.li`
  a {
    color: ${(props) => (props.isHome ? "#fff" : "#000")};
  }
`;
const SearchWrapper = styled.div`
  width: 45%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const MainTitle = styled.h1`
  width: 100%;
  font-size: 48px;
  color: #fff;
  font-weight: 500;
  line-height: 50px;
  margin-bottom: 1.5rem;
`;
