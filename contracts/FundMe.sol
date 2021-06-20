pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

contract FundMeCoin {
    struct Account {
        string nickName;
        address celoAddress;
        uint256 dontaed;
        uint256 raised;
        bool created;
    }

    struct FundRaiser {
        string nickName;
        string id;
        address celoAddress;
        uint32 totalRaised;
        string content;
        uint16 upVotes;
    }

    mapping(address => Account) accounts;
    mapping(address => FundRaiser[]) accountFundRaisers;
    FundRaiser[] fundRaisers;

    function getAccount(address celoAddress)
        public
        view
        returns (Account memory)
    {
        return accounts[celoAddress];
    }

    function createAccount(Account memory acc) public {
        if (!accounts[acc.celoAddress].created) {
            accounts[acc.celoAddress] = acc;
        }
    }

    function createFundRaiser(FundRaiser memory fundRaiser) public {
        fundRaisers.push(fundRaiser);
        accountFundRaisers[fundRaiser.celoAddress].push(fundRaiser);
    }

    function getAccountFundRaisers(address celoAddress)
        public
        view
        returns (FundRaiser[] memory)
    {
        return accountFundRaisers[celoAddress];
    }

    function getAccountFundRaisers() public view returns (FundRaiser[] memory) {
        return fundRaisers;
    }

    function updateFund(
        uint32 cUSD,
        string memory id,
        address celoAddress
    ) public {
        for (uint256 i = 0; i < fundRaisers.length; i++) {
            string memory _id = fundRaisers[i].id;

            if (
                keccak256(abi.encodePacked(_id)) ==
                keccak256(abi.encodePacked(id))
            ) {
                fundRaisers[i].totalRaised += cUSD;
            }
        }

        for (uint256 i = 0; i < accountFundRaisers[celoAddress].length; i++) {
            string memory accId = accountFundRaisers[celoAddress][i].id;

            if (
                keccak256(abi.encodePacked(accId)) ==
                keccak256(abi.encodePacked(id))
            ) {
                fundRaisers[i].totalRaised += cUSD;
            }
        }
    }
}
