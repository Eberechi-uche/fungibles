import CardModal from "../../component/modals/CardModals";
import { Input, Flex, Button, SimpleGrid } from "@chakra-ui/react";

import { ItemCard } from "../../component/cards/Card";
import { useState } from "react";
import { getAllNts } from "../../component/api/NFTs/getNfts";
import GridLoader from "react-spinners/GridLoader";

export const Home = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const [nftData, setNFTs] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();

    setWalletAddress(e.target.value);
  };

  const handleFetch = async () => {
    setIsloading(true);
    await getAllNts(walletAddress, "", setNFTs);
    setIsloading(false);
  };
  return (
    <div>
      <Flex gap={"5"}>
        <Input
          placeholder="Enter your wallet address"
          size="md"
          _placeholder={{
            color: "red.600",
          }}
          onChange={handleChange}
          borderRadius={"full"}
        />
        <Button
          borderRadius={"full"}
          borderColor={"whatapp.800"}
          colorScheme={"whatsapp"}
          onClick={handleFetch}
          variant={"outline"}
        >
          Get NFT's
        </Button>
      </Flex>
      <CardModal />
      {!isLoading && (
        <SimpleGrid columns={[2, 3, 4]} gap={"6"} mt={5}>
          {nftData.map(({ value }, index) => (
            <ItemCard key={index} cardData={value} />
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid alignItems={"center"} justifyContent={"center"} h={"70vh"}>
        <GridLoader
          color="hsla(134, 44%, 29%, 0.69)"
          loading={isLoading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </SimpleGrid>
    </div>
  );
};
