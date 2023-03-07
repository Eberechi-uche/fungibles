import { Button, Text, Flex } from "@chakra-ui/react";
import { modalData } from "../../atoms/modalState";
import { useRecoilState } from "recoil";

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
          <ModalHeader>{data.data[2]}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text> {data.data[0]}</Text>
            <Text> {data.data[1]}</Text>
            <Flex justifyContent={"flex-end"}>
              <Button
                borderRadius={"full"}
                width={"max-content"}
                w={"30%"}
                h={"8"}
              >
                buy
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default CardModal;
