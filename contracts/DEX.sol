import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token is ERC20 {
  constructor(uint initialSupply) ERC20('DonCoin', 'DON') {
    _mint(msg.sender, initialSupply);
  }
}