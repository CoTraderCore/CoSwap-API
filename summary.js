const axios = require("axios");

module.exports=async (req, res) => {

    try {
        const result = await axios.post(
          "https://api.thegraph.com/subgraphs/name/vishalkale151071/cotrader",
          {
            query: `{
                pairs{
                    id
                    token0{
                      symbol
                      totalSupply
                      tradeVolume
                    }
                    token1{
                      symbol
                      totalSupply
                      tradeVolume
                    }
                    token0Price
                    token1Price
                    volumeToken0
                    volumeToken1
                    totalSupply
                  }
              }`,
          }
        );
        //console.log(result.data.data);
        res.send(result.data.data)
      } catch (e) {
        console.log(e);
      }
  
}