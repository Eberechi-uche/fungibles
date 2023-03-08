const apiKey = "2rccZJsHQoan_Uci7EnUkjVvC76FUpqo";
const endpoint = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`;

export const fetchNFTs = async (owner, contractAddress, retryAttempt) => {
  if (retryAttempt === 5) {
    return;
  }
  if (owner) {
    let data;
    try {
      if (contractAddress) {
        data = await fetch(
          `${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`
        ).then((data) => data.json());
      } else {
        data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then((data) =>
          data.json()
        );
      }
    } catch (e) {
      console.log(e.message);
    }

    return data;
  }
};

const getNFTMetaData = async (NFTS) => {
  const NFTsMetaData = await Promise.allSettled(
    NFTS.map(async (NFT) => {
      let metaData = await fetch(
        `${endpoint}/getNFTMetadata?contractAddress=${NFT.contract.address}&tokenId=${NFT.id.tokenId}`
      ).then(async (data) => await data.json());
      console.log(metaData);
      let imageUrl;

      if (metaData.media[0].raw) {
        imageUrl = metaData.media[0].raw;
      } else {
        imageUrl =
          "https://i1.sndcdn.com/avatars-9k7QwwORGMGHOXLy-ztA7Eg-t500x500.jpg";
      }

      return {
        id: NFT.id.tokenId,
        contractAdd: NFT.contract.address,
        image: imageUrl,
        name: metaData.metadata.name,
        des: metaData.metadata.description,
        attr: metaData.metadata.attributes,
        buy: metaData.metadata.external_url,
        symbol: metaData.contractMetadata.symbol,
        socials: metaData.contractMetadata.openSea.discordUrl,
        floorPrice: metaData.contractMetadata.openSea.floorPrice,
      };
    })
  );
  return NFTsMetaData;
};

const getAllNts = async (owner, contractAddress, setNFTs) => {
  const data = await fetchNFTs(owner, contractAddress);

  const NFTs = await getNFTMetaData(data.ownedNfts);
  if (NFTs.length) {
    let fullFilled = NFTs;
    console.log(NFTs);
    setNFTs(NFTs);
  } else {
  }
};
export { getAllNts };
