import CardModal from "../../component/modals/CardModals";
import { Input, Flex, Button } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { ItemCard } from "../../component/cards/Card";
import { useState } from "react";
import { modalData } from "../../atoms/modalState";
import { useRecoilState } from "recoil";
import useFetch from "../../component/customHooks/dataFetching/useFetch";

export const Home = () => {
  const [walletAddress, setWalletAddress] = useState("");
  // const { data, isPending, error } = useFetch();
  const handleChange = (e) => {
    e.preventDefault();
    setWalletAddress(e.target.value);
    console.log(e.target.value);
  };
  const test = ["manners", "maketh"];
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
        <Button borderRadius={"full"} bg={"gray.800"} color={"whatsapp.100"}>
          Get NFT's
        </Button>
      </Flex>
      <CardModal />
      <SimpleGrid columns={[1, 2, 4]} gap={"6"} mt={5}>
        <ItemCard cardData={["one", "two", "three"]} />
        <ItemCard cardData={["four", "five", "six"]} />
        <ItemCard cardData={["seven", "eigth", "nine"]} />
      </SimpleGrid>
    </div>
  );
};
