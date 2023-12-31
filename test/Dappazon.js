const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
  let dappazon
  let deployer, buyer

  beforeEach(async() =>{
   [deployer,buyer] = await ethers.getSigners()
    //console.log(deployer.address,buyer)
    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon = await Dappazon.deploy()
  })
   describe("Deployment", () =>{
    it('Sets the owner', async() =>{
      expect(await dappazon.owner()).to.equal(deployer.address)
     }) 
    
    
   })
   describe("Listing", () =>{
   beforeEach(async ()=>{
    
   })
   
    it('Returns item attributes', async() =>{
      
     }) 
    
    
   })
   
})
