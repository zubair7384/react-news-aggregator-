import React from "react";
import { Modal } from "antd";
import styled from "styled-components";

const CustomModal = ({
  isVisible,
  title,
  content,
  imageUrl,
  onOk,
  onCancel,
}) => {
  return (
    <StyledModal
      //   title={title}
      open={isVisible}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <StyledContent>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} style={{ width: "100%" }} />
        <p>{content}</p>
      </StyledContent>
    </StyledModal>
  );
};

export default CustomModal;

const StyledModal = styled(Modal)`
  width: 70% !important;
  .ant-modal-body {
    width: 90%;
    margin: 0 auto;
  }
`;
const StyledContent = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  img {
    display: flex;
    width: 80% !important;
    margin: 0 auto;
    text-align: center;
    padding: 1rem 0 2rem 0;
  }
`;
