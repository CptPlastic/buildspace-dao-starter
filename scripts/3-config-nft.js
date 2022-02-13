import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xb99D14F687e16F1F14e33c643211abfBECdB4004",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "KIT ORB OF THE WIND",
        description: "This NFT will give you access to KitbashDAO!",
        image: readFileSync("scripts/assets/orb.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()