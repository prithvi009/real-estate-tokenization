//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RealEstateToken {
    
    struct RealEstate {
        address owner;
        string addressOfLand;
        string[] images;
        string ownerName;
        uint purchaseDate;
        uint landSize;
        string landRegistrationNo;
        bool isForSale;
        uint salePrice;
    }
    
    RealEstate[] public realEstates;
    
    mapping(uint => address) public realEstateToOwner;
    mapping(address => uint) public ownerRealEstateCount;
    
    event NewRealEstate(uint realEstateId, string tokenAddress);
    event RealEstateOwnershipTransferred(uint realEstateId, address previousOwner, address newOwner);
    event RealEstateSetForSale(uint realEstateId, uint salePrice);
    event RealEstateSold(uint realEstateId, address buyer, uint salePrice);
    
    function createRealEstate(string memory _address, string[] memory _images, string memory _landRegistrationNo, string memory _ownerName, uint _purchaseDate, uint _landSize) public {
        RealEstate memory newRealEstate = RealEstate({
            owner: msg.sender,
            addressOfLand: _address,
            images: _images,
            ownerName: _ownerName,
            purchaseDate: _purchaseDate,
            landSize: _landSize,
            landRegistrationNo: _landRegistrationNo,
            isForSale: false,
            salePrice: 0
        });
        realEstates.push(newRealEstate);
        uint id = realEstates.length +1;
        realEstateToOwner[id] = msg.sender;
        ownerRealEstateCount[msg.sender]++;
        emit NewRealEstate(id, _address);
    }
    
    function setRealEstateForSale(uint _realEstateId, uint _salePrice) public {
        require(realEstates[_realEstateId].owner == msg.sender, "You are not the owner of this real estate");
        realEstates[_realEstateId].isForSale = true;
        realEstates[_realEstateId].salePrice = _salePrice;
        emit RealEstateSetForSale(_realEstateId, _salePrice);
    }
    
    function buyRealEstate(uint _realEstateId) public payable {
        require(realEstates[_realEstateId].isForSale == true, "This real estate is not for sale");
        require(msg.value == realEstates[_realEstateId].salePrice, "The amount of Ether sent is not equal to the sale price");
        address payable previousOwner = payable(realEstates[_realEstateId].owner);
        address payable newOwner = payable(msg.sender);
        previousOwner.transfer(msg.value);
        realEstateToOwner[_realEstateId] = newOwner;
        ownerRealEstateCount[previousOwner]--;
        ownerRealEstateCount[newOwner]++;
        realEstates[_realEstateId].isForSale = false;
        realEstates[_realEstateId].salePrice = 0;
        emit RealEstateSold(_realEstateId, newOwner, msg.value);
        emit RealEstateOwnershipTransferred(_realEstateId, previousOwner, newOwner);
    }
}


//0xe5A80EfC42609e9a0ce1B8C5308FdB06b83CD03b