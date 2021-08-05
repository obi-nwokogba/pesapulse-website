// STATE VARIABLES
const BASE_URL = "https://api.coingecko.com/api/v3";
const URL_TRENDING = "search/trending";

function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + "..."
    } else {
      return string
    }
  }

let $mainContainer = $(".mainContainer");

// This function is called when someone seearches for a movie.
function loadTrendingCryptos() {

    let trendingCryptosHTML = `<h2>7 Most Popular Cryptocurrencies Today</h2>
    <div class="trendingCryptoContainer">`;

    $.ajax({
            url: `${BASE_URL}/${URL_TRENDING}`
        })
        .then(
            function (returnedData) {

                let trendingSevenCryptos = returnedData;

                for (i = 0; i < returnedData.coins.length; i++) {
                    let trendingCryptoName = returnedData.coins[i].item.name;
                    let trendingCryptoSymbol = returnedData.coins[i].item.symbol;
                    let trendingCryptoMarketCapRank = returnedData.coins[i].item.market_cap_rank;

                    trendingCryptosHTML = trendingCryptosHTML +
                        `<div class="trendingCryptoBox"> ${trendingCryptoSymbol} &middot; ${truncateString(trendingCryptoName,12)}

                    <br /><span class="verylight">Market Cap Rank</span><br />
                    <span class="bignumber1">${trendingCryptoMarketCapRank}</span>
                    </div>`;
                }

                $mainContainer.html(`${trendingCryptosHTML}`);
            },
            function (error) {
                console.log("bad request: ", error);
            }
        );
}
loadTrendingCryptos();


function getCryptoInformationBox(cryptoID) {

    let thisCryptoName, thisCryptoSymbol, thisCryptoCoinID, thisCryptoPriceBTC,
        thisCryptoMarketCapRank;
    let thisCryptoHTML = `<div class="trendingCryptoContainer">`;

    $.ajax({
            url: `https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
        })
        .then(
            function (returnedData) {

                thisCryptoName = returnedData.name;
                thisCryptoSymbol = returnedData.symbol;
                thisCryptoMarketCapRank = returnedData.market_cap_rank;
                trendingCryptoHTML =
                    `<div class="trendingCryptoBox"> ${thisCryptoName} &middot; ${thisCryptoSymbol}

                <br /><span class="verylight">Market Cap Rank</span><br />
                <span class="bignumber1">${trendingCryptoMarketCapRank}</span>
                </div>`;
                return trendingCryptoHTML;
            },
            function (error) {
                console.log("bad request: ", error);
            }
        );
}

function hallOfFameCryptos() {

    let trendingCryptosHTML = `<h2>Popular Cyptocurrencies</h2>
    <div class="trendingCryptoContainer">`;

    let mostLovedCryptos = [`bitcoin`, `ethereum`, `EOS`];
    let cryptoHTML = "";
    let thisCryptoBox = "";

    for (i = 0; i < mostLovedCryptos.length; i++) {
        thisCryptoBox = getCryptoInformationBox(mostLovedCryptos[i]);
        $mainContainer.append(thisCryptoBox);
    }
}

hallOfFameCryptos();
















/*
FINNHUB API KEY
c2qq5lqad3ickc1m1gsg

*/