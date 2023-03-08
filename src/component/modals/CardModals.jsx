import { modalData } from "../../atoms/modalState";
import { useRecoilState } from "recoil";
import { PreviewCard } from "../cards/Card";

import {
  Modal,
  ModalOverlay,
  ModalContent,
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
          <ModalCloseButton color={"whatsapp.100"} size={"md"} />
          <PreviewCard data={data.data} />
        </ModalContent>
      </Modal>
    </>
  );
}
export default CardModal;
