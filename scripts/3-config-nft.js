import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  '0x87AFF94165f7C3A6c17b88233ce4dF8Cec6dbfea',
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Gator Nation Membership",
        description: "This NFT will give you access to GatorDAO and prove your support to the Gator Nation!",
        image: readFileSync("scripts/assets/gator-logo.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()