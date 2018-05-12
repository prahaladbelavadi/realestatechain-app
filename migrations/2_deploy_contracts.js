var SimpleStorage = artifacts.require("SimpleStorage");
var TutorialToken = artifacts.require("TutorialToken");
var ComplexStorage = artifacts.require("ComplexStorage");
var REZToken = artifacts.require("REZToken");
var REDAToken = artifacts.require("REDAToken");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(ComplexStorage);
  deployer.deploy(REZToken);
  deployer.deploy(REDAToken);
};
