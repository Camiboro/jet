let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

const fromEuroToDollar = (amount) => {
    return amount * oneEuroIs.USD;
};

const fromDollarToYen = (amount) => {
    // Convert the dollar amount to euros first, then to yen.
    return (amount / oneEuroIs.USD) * oneEuroIs.JPY;
};

const fromYenToPound = (amount) => {
    // Convert the yen amount to euros first, then to pounds.
    return (amount / oneEuroIs.JPY) * oneEuroIs.GBP;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
