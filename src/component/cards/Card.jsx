import { Card, CardBody, Button, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";

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
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const handleViewClick = (action) => {
    alert(action);
  };
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

          <Flex
            m={5}
            justify={"center"}
            onClick={() => {
              openInNewTab(data.socials);
            }}
            _hover={{
              cursor: "pointer",
              transform: "scale(1.2)",
              transition: " transform 0.7s ease-in-out",
            }}
          >
            <Text color={"blue.800"}>join community</Text>
            <img src="/discord.png" alt="icon" width={"30px"} />
          </Flex>

          <Flex flexDir={"row"} justifyContent="space-between">
            <Button
              colorScheme={"whatsapp"}
              variant={"outline"}
              onClick={() => {
                openInNewTab(data.buy);
              }}
            >
              buy
            </Button>

            <Button
              colorScheme={"red"}
              onClick={() => {
                handleViewClick(data.contractAdd);
              }}
            >
              view contract address
            </Button>
          </Flex>
        </Flex>
      </div>
    </>
  );
};
