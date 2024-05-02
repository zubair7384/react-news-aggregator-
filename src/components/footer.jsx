import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Divider } from "antd";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <StyledFooterWrapper>
      <div className="container footer">
        <StyledLogo>
          <Link to="/">TNA</Link>
        </StyledLogo>
        <StyledList>
          {[
            {
              key: "1",
              name: "All Filters",
              link: "/search",
            },
            {
              key: "2",
              name: isHome ? "More" : "Home",
              link: isHome ? "/search" : "/",
            },
          ].map((item) => (
            <StyledLink key={item.key}>
              <Link className={`link-${item.key}`} to={item.link}>
                {item.name}
              </Link>
            </StyledLink>
          ))}
        </StyledList>
      </div>
      <Divider style={{ background: "#fff", margin: "12px 0" }} />
      <p>© 2024 TNA. All rights reserved | Privacy Policy</p>
    </StyledFooterWrapper>
  );
};

export default Footer;

const StyledFooterWrapper = styled.div`
  height: 120px;
  background: #000;
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
  }
  p {
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    line-height: 30px;
`;

const StyledLogo = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 26px;
  a {
    color: #fff;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
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
    color: #fff;
  }
  .link-1 {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
