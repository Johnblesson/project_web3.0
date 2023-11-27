require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/IKyii1_SKBkjPYlAoqsTHzgzvJU-UkQK',
      accounts: ['dab76a99fa71a42786d638762a71ed3833dce45868b2defd12ff89f5b2104c72'],
    },
  },
};