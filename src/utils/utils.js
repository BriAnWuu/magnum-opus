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

const formatTimeHumanReadable = (timestamp) => {
    const now = Date.now();
    const secondsPast = (now - timestamp) / 1000;

    if (secondsPast < 60) {                                      // less than a minute
        const seconds = Math.ceil(secondsPast);                  // ceil to avoid -1 seconds
        return `${seconds} Second${seconds === 1 ? '' : 's'} ago`;
    } else if (secondsPast < 3600) {                             // less than an hour
        const minutes = Math.floor(secondsPast / 60);
        return `${minutes} Minute${minutes === 1 ? '' : 's'} ago`;
    } else if (secondsPast < 86400) {                            // less than a day
        const hours = Math.floor(secondsPast / 3600);
        return `${hours} Hour${hours === 1 ? '' : 's'} ago`;
    } else if (secondsPast < 604800) {                           // less than a week
        const days = Math.floor(secondsPast / 86400)
        return `${days} Day${days === 1 ? '' : 's'} ago`;
    } else if (secondsPast < 2592000) {                          // less than a month (30 days)
        const weeks = Math.floor(secondsPast / 604800)
        return `${weeks} Week${weeks === 1 ? '' : 's'} ago`;
    } else if (secondsPast < 31536000) {                         // less than a year (12 months)
        const months = Math.floor(secondsPast / 2592000);
        return `${months} Month${months === 1 ? '' : 's'} ago`;
    } else {                                                     // over a year
        const years = Math.floor(secondsPast / 31536000);
        return `${years} Year${years === 1 ? '' : 's'} ago`;
    }
}

const divideArtworks = (arr, numOfGroups = 7) => {
    const groups = [];
    const groupSize = Math.floor(arr.length / numOfGroups);

    let arrStart = 0;
    for (let i = 0; i < numOfGroups; i++) {
        i === numOfGroups - 1 ?
            groups.push(arr.slice(arrStart)) :
            groups.push(arr.slice(arrStart, arrStart + groupSize));
        arrStart += groupSize;
    }

    return groups;
}

export {
    convertBC,
    divideArtworks,
    formatPrice,
    formatTime,
    formatTimeHumanReadable,
    getCurrentPrice
};

