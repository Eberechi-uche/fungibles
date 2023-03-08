import {
  Card,
  CardBody,
  Button,
  Text,
  Image,
  Flex,
  Stack,
  Heading,
  CardFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
    <Card maxW={"md"} onClick={handleClick} _hover={{ cursor: "pointer" }}>
      <CardBody size={"md"} p="2" textAlign={"center"}>
        <Image
          src={cardData.image}
          alt="Green double couch with wooden legs"
          borderRadius="sm"
          mb="2"
        />

        <Flex justifyContent={"center"}>
          <Text
            fontWeight={"2"}
            bg={"gray.800"}
            color={"white"}
            borderRadius="full"
            px="2"
            py="2"
          >
            cardData.name
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export const ModalCard = ({ data }) => {
  // const { contractAddress, image, desc, buy, title } = data;
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        size={"lg"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={data[2]}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody textAlign={"center"} m={0}>
            <Heading size="md">{data[2]}</Heading>

            <Text py="2">{data[4]}</Text>
          </CardBody>

          <CardFooter>
            <Link to={data[6]}>
              <Button variant="solid" colorScheme="blue">
                Buy
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};
