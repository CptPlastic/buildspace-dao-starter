import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xE05Ca9FB4C41d14D4C00E757C53BA7a433952c08");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name
      name: "KITBASHDAO Membership",
      // the collection.
      description: "A DAO for ninjas of KITBASH.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/kitbash.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop? so we'll pass in the 0x0 address...
      // we can set this to your own wallet address if you want to charge for the drop so like 4%??.
      // I dont understand this crap 
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()