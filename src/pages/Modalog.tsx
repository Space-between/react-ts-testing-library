import React from "react";
import { Modal } from "antd";
import { Record } from "./PushMessage";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const ExtendedModal = styled(Modal)`
  height: 300px;
  .ant-modal-content {
    height: 100%;
    overflow: scroll;
  }
`;

export interface Imodal {
  relay?: Record;
  visible: boolean;
  handleOk: (e: any) => void;
  handleCancel: (e: any) => void;
}

export default function Modalog(props: Imodal) {
  const markdown = `### ${props.relay?.contents}`;
  return (
    <div data-testId="test-modalog">
      <ExtendedModal
        data-testId="realmodal"
        title={props.relay?.title}
        visible={props.visible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
        footer={null}
      >
        <ReactMarkdown source={markdown} />
      </ExtendedModal>
    </div>
  );
}
