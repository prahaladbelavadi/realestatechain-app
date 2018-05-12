pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol';


/**
 * @title ERC721 Non-Fungible Token Standard basic implementation
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract REDAToken is ERC721BasicToken {
  string public constant name = "Real Estate Decentralized Asset";
  string public constant symbol = "REDA";
}
