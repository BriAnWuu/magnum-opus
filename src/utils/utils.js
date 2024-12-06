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

const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return [seconds, minutes, hours, days];
}

export {
    convertBC,
    formatPrice,
    formatTime,
    getCurrentPrice
};

