const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(price);
}

const convertBC = (year) => {
    if (year < 0) {
        return `${-year} B.C.`;
    }
    return year;
}

const getCurrentPrice = (ask, lead) => {
    return lead.length === 0 ? ask : lead[lead.length - 1];
}

export {
    convertBC,
    formatPrice,
    getCurrentPrice
};

