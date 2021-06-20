var FundMeCoin = artifacts.require('FundMeCoin')

module.exports = function(deployer) {
  deployer.deploy(FundMeCoin)
}