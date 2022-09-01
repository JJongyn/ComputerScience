const Student = artifacts.require("Student"); // 파라미터로 contract의 이름을

module.exports = function(deployer) {
  deployer.deploy(Student);
};
