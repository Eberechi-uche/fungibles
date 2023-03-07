import { Card, CardBody, Button, Text, Image, Flex } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { modalData } from "../../atoms/modalState";

export const ItemCard = ({ cardData }) => {
  const [value, setValue] = useRecoilState(modalData);
  const handleClick = () => {
    setValue(() => ({
      open: true,
      data: [...cardData],
    }));
  };

  return (
    <Card maxW={"md"}>
      <CardBody size={"md"} p="2">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="md"
          maxW={"full"}
          mb="2"
        />
        <Text
          fontWeight={"2"}
          bg={"gray.800"}
          mt={"20"}
          color={"white"}
          borderRadius="full"
          display={"inline"}
          px="2"
        >
          cllection name
        </Text>
        <Text fontSize={"2xl"} textTransform={"uppercase"}>
          nft name
        </Text>
        <Flex justify={"space-between"}>
          <Text>address</Text>
          <Button borderRadius={"full"} size="xs" onClick={handleClick}>
            more
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};
