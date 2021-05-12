# Documentation

All CoSwap pairs consist of two different tokens. BNB is not a native currency in CoSwap, and is represented only by WBNB in the pairs. 

The canonical WBNB address used by the CoSwap interface is `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`.

Results are cached for 5 minutes (or 300 seconds).

## [`/summary`](https://api.CoSwap.info/api/v2/summary)

Returns data for the top ~1000 CoSwap pairs

### Request

`GET https://limitless-brook-83647.herokuapp.com/summary`

### Response

```json5
{
[
 {
 "createdAtTimestamp":"1620044334",
 "id":"0xe81e92bf8a02da1937b932d06ea6d1c6e35b7c01",
 "token0":
    {
        "symbol":"bCOT","totalSupply":"14856",
        "tradeVolume":"101488617.668119704360016386"
    },
 "token0Price":"1399183.246686046699141054276705789",
 "token1":
    {
        "symbol":"WBNB",
        "totalSupply":"15664",
        "tradeVolume":"127.882823745326516716"
    },
 "token1Price":"0.0000007147026684092246438109136592762715",
 "totalSupply":"81051.035630534711952173",
 "volumeToken0":"101488617.668119704360016386",
 "volumeToken1":"127.882823745326516716"
  }
 ]
}

```

## [`/tokens`](https://limitless-brook-83647.herokuapp.com/tokens)

Returns the tokens in the top ~1000 pairs on CoSwap.

### Request

`GET https://limitless-brook-83647.herokuapp.com/tokens`

### Response

```json5
{
 [
  {
  "id":"0x304fc73e86601a61a6c6db5b0eafea587622acdc",
  "name":"CoTrader",
  "symbol":"bCOT",
  "totalLiquidity":"97293053.741359304275629426",
  "totalSupply":"14856",
  "tradeVolume":"101488617.668119704360016386",
  "tradeVolumeUSD":"0"
 },
 ...
 ]
}

```

## [`/tokens/0x...`](https://limitless-brook-83647.herokuapp.com/tokens/0x304fc73e86601a61a6c6db5b0eafea587622acdc)

Returns the token information, based on address.

### Request

`GET https://limitless-brook-83647.herokuapp.com/tokens/0x304fc73e86601a61a6c6db5b0eafea587622acdc`

### Response

```json5
{
 [
  {
  "name":"CoTrader",
  "symbol":"bCOT",
  "totalLiquidity":"97293053.741359304275629426",
  "totalSupply":"14856",
  "tradeVolume":"101488617.668119704360016386",
  "tradeVolumeUSD":"0"
  }
 ]
}

```

## [`/pairs`](https://limitless-brook-83647.herokuapp.com/pairs)

Returns data for the top ~1000 CoSwap pairs.

### Request

`GET https://limitless-brook-83647.herokuapp.com/pairs`

### Response

```json5
{
 [
  {
  "createdAtTimestamp":"1620044334",
  "id":"0xe81e92bf8a02da1937b932d06ea6d1c6e35b7c01",
  "token0":
     {
        "symbol":"bCOT",
        "totalLiquidity":"97293053.741359304275629426",
        "totalSupply":"14856",
        "tradeVolume":"101488617.668119704360016386"
     },
  "token0Price":"1399183.246686046699141054276705789",
  "token1":
     {
        "symbol":"WBNB",
        "totalLiquidity":"69.535605126631591975",
        "totalSupply":"15664",
        "tradeVolume":"127.882823745326516716"
     },
  "token1Price":"0.0000007147026684092246438109136592762715",
  "volumeToken0":"101488617.668119704360016386",
  "volumeToken1":"127.882823745326516716"
  }
 ]
}
```



