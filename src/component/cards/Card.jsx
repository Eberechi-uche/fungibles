import { Card, CardBody, Button, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { modalData } from "../../atoms/modalState";
import "./card.styles.css";

export const ItemCard = ({ cardData }) => {
  const [value, setValue] = useRecoilState(modalData);

  const handleClick = () => {
    setValue(() => ({
      open: true,
      data: cardData,
    }));
  };

  return (
    <Card
      maxW={"md"}
      onClick={handleClick}
      _hover={{ cursor: "pointer" }}
      bg={"gray.700"}
    >
      <CardBody size={"md"} p="2" textAlign={"center"}>
        <Image
          src={cardData.image}
          borderRadius="sm"
          mb="2"
          alt={cardData.name}
        />

        <Flex
          flexDir={"row"}
          justifyContent={"space-between"}
          color={"gray.300"}
        >
          <Text fontSize={"sm"} px="1">
            {cardData.name}
          </Text>
          <Text
            borderRadius={"full"}
            borderColor={"red.500"}
            fontSize={"xx-small"}
            px="2"
            color={"red.500"}
            p={"none"}
            maxH={"fit-content"}
            m={"0"}
          >
            {cardData.symbol}
          </Text>
        </Flex>
        <Flex flexDir={"row"} pt={"3"} color="whiteAlpha.600">
          <Text fontSize={"xs"} px="2" isTruncated>
            floor Price:{cardData.floorPrice}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export const PreviewCard = ({ data }) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-img-container">
          <img src={data.image} alt="test" className="img" />
        </div>
        <Flex flexDir={"column"} p={"5"}>
          <div className=".info">
            <h2> {data.name}</h2>

            <Text maxH={"30%"}>{data.des}</Text>
          </div>
          <Link to={"data.socials"}>
            <Flex m={5} justify={"center"}>
              <Text color={"blue.800"}>join community</Text>
              <img src="/discord.png" alt="icon" width={"30px"} />
            </Flex>
          </Link>
          <Flex flexDir={"row"} justifyContent="space-between">
            <Link to={data.buy}>
              <Button colorScheme={"whatsapp"} variant={"outline"}>
                buy
              </Button>
            </Link>

            <Button colorScheme={"red"}> view contract address</Button>
          </Flex>
        </Flex>
      </div>
    </>
  );
};
