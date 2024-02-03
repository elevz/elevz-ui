import React from "react";
import styled from "styled-components";
import Overlay, { OverlayProps } from "./overlay";
import { Flex } from "../layout";

interface ModalProps extends OverlayProps {
  title: string;
}

const Modal = styled(Flex)`

`;

export default function (props: ModalProps) {
  return (
    <Overlay visible={props.visible}>
      <Modal flexDirection="column">
        {props.children}
      </Modal>
    </Overlay>
  )
}