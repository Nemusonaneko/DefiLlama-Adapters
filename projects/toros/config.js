const ADDRESSES = require('../helper/coreAssets.json')
const {
  transformPolygonAddress,
  transformOptimismAddress,
} = require("../helper/portedTokens");

const CONFIG_DATA = {
  polygon: {
    transformAddress: transformPolygonAddress,
    dhedgeFactory: "0xfdc7b8bFe0DD3513Cc669bB8d601Cb83e2F69cB0",
    torosMultisigManager: "0x090e7fbd87a673ee3d0b6ccacf0e1d94fb90da59",
    daiToken: ADDRESSES.polygon.DAI,
  },
  optimism: {
    transformAddress: transformOptimismAddress,
    dhedgeFactory: "0x5e61a079A178f0E5784107a4963baAe0c5a680c6",
    torosMultisigManager: "0x813123a13d01d3f07d434673fdc89cbba523f14d",
    daiToken: ADDRESSES.optimism.DAI,
  },
};

module.exports = {
  CONFIG_DATA,
};
