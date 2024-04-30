import React from "react";
import { Tabs } from "antd";
import CardsGrid from "./cards_grid";
import styled from "styled-components";

const CustomTabs = () => {
  const items = [
    {
      key: "1",
      label: "NewsAPI",
      children: <CardsGrid title="NewAPI" />,
    },
    {
      key: "2",
      label: "OpenNews",
      children: <CardsGrid title="OpenNews" />,
    },
    {
      key: "3",
      label: "NewsCred",
      children: <CardsGrid title="NewsCred" />,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return <StyledTabs onChange={onChange} type="card" items={items} />;
};
export default CustomTabs;

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    &::before {
      display: none !important;
    }
  }
  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
    margin: 2rem 0 1rem 0;
    .ant-tabs-nav-list {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }

  .ant-tabs-tab {
    border-radius: 20px !important;
    background: #fff;
    border: 1px solid #0000009e;
    .ant-tabs-tab-btn {
      font-size: 16px;
      font-weight: 600;
      color: #0000009e !important;
    }
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    background-color: #000;
    .ant-tabs-tab-btn {
      color: #fff !important;
    }
  }
`;
