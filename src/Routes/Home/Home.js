import CardModal from "../../component/modals/CardModals";
import { Input, Flex, Button } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { ItemCard, PreviewCard } from "../../component/cards/Card";
import { useState } from "react";
import { getAllNts } from "../../component/api/NFTs/getNfts";

export const Home = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const [nftData, setNFTs] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setWalletAddress(e.target.value);
    console.log(e.target.value);
  };
  const handleFetch = async () => {
    await getAllNts(walletAddress, "", setNFTs);
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
          bg={"gray.800"}
          color={"whatsapp.100"}
          onClick={handleFetch}
        >
          Get NFT's
        </Button>
      </Flex>
      <CardModal />
      <SimpleGrid columns={[1, 2, 4]} gap={"6"} mt={5}>
        {nftData.map(({ value }, index) => (
          <ItemCard key={index} cardData={value} />
        ))}
      </SimpleGrid>
    </div>
  );
};
