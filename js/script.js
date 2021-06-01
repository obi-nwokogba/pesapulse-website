// STATE VARIABLES
const BASE_URL = "https://api.coingecko.com/api/v3";
const URL_TRENDING = "search/trending";

let $mainContainer = $(".mainContainer");

// This function is called when someone seearches for a movie.
function loadTrendingCryptos() {

    let tendingCryptoName, trendingCryptoSymbol, trendingCryptoCoinID, trendingCryptoPriceBTC,
        trendingCryptoMarketCapRank;

    let trendingCryptosHTML = `<h2>7 Most Popular Cryptocurrencies Today</h2>
    <br /><div class="trendingCryptoContainer">`;

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
                    `<div class="trendingCryptoBox"> ${trendingCryptoName} &middot; ${trendingCryptoSymbol}
                    <h1>${trendingCryptoMarketCapRank}</h1>
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



















/*
FINNHUB API KEY
c2qq5lqad3ickc1m1gsg

…or create a new repository on the command line
echo "# pesapulse" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/obi-nwokogba/pesapulse.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/obi-nwokogba/pesapulse.git
git branch -M main
git push -u origin main

*/