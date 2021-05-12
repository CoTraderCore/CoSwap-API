const axios = require("axios");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/summary", async (req, res) => {
  try {
    const result = await axios.post(
      "https://api.thegraph.com/subgraphs/name/vishalkale151071/cotrader",
      {
        query: `{
            tokens(first: 5) {
              id
              symbol
              name
              decimals
              totalSupply
              tradeVolume
              tradeVolumeUSD
              totalLiquidity
            }
          
                pairs{
                    id
                    createdAtTimestamp
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
    console.log(result.data.data);
    res.send(result.data.data);
  } catch (e) {
    console.log(e);
  }
});

app.get("/tokens", async (req, res) => {
  try {
    const result = await axios.post(
      "https://api.thegraph.com/subgraphs/name/vishalkale151071/cotrader",
      {
        query: `{
            tokens{
              id
              symbol
              name
              totalSupply
              tradeVolume
              tradeVolumeUSD
              totalLiquidity
            }
          }`,
      }
    );
    console.log(result.data.data);
    res.send(result.data.data);
  } catch (e) {
    console.log(e);
  }
});

app.get("/tokens/:address", async (req, res) => {
  try {
    const result = await axios.post(
      "https://api.thegraph.com/subgraphs/name/vishalkale151071/cotrader",
      {
        query: `{
          tokens(where:{
            id: "${req.params.address}"
          }){
           
            symbol
            name
            totalSupply
            tradeVolume
            tradeVolumeUSD
            totalLiquidity
          }
        }`,
      }
    );
    console.log(result.data.data);
    res.send(result.data.data);
  } catch (e) {
    console.log(e);
  }
});

app.get("/pairs", async (req, res) => {
  try {
    const result = await axios.post(
      "https://api.thegraph.com/subgraphs/name/vishalkale151071/cotrader",
      {
        query: `{
            pairs{
              id
              createdAtTimestamp
              token0{
                symbol
                totalSupply
                tradeVolume
                totalLiquidity
              }
              token1{
                symbol
                totalSupply
                tradeVolume
                totalLiquidity
              }
              token0Price
              token1Price
              volumeToken0
              volumeToken1
            }
          }`,
      }
    );
    console.log(result.data.data);
    res.send(result.data.data);
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
