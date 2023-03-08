import { Button, Text, Flex } from "@chakra-ui/react";
import { modalData } from "../../atoms/modalState";
import { useRecoilState } from "recoil";
import { ModalCard, PreviewCard } from "../cards/Card";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function CardModal() {
  const [data, setData] = useRecoilState(modalData);

  const handleClose = () => {
    setData((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <>
      <Modal isOpen={data.open} onClose={handleClose} size={"lg"}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          {/* <ModalHeader>{data.data.name}</ModalHeader>
          <ModalCloseButton />

          <ModalCard data={data.data} /> */}
          <ModalCloseButton />
          <PreviewCard data={data.data} />
        </ModalContent>
      </Modal>
    </>
  );
}
export default CardModal;
