const data = [
    {
        location: "New York",
        latitude: 40.7128,
        longitude: -74.006,
    },
    {
        location: "Los Angeles",
        latitude: 34.0522,
        longitude: -118.2437,
    },
    {
        location: "Chicago",
        latitude: 41.8781,
        longitude: -87.6298,
    },
    {
        location: "london",
        latitude: 51.5074,
        longitude: -0.1278,
    },
    {
        location: "Houston",
        latitude: 29.7604,
        longitude: -95.3698,
    },
    {
        location: "Phoenix",
        latitude: 33.4484,
        longitude: -112.074,
    },
    {
        location: "Philadelphia",
        latitude: 39.9526,
        longitude: -75.1652,
    },
    {
        location: "San Antonio",
        latitude: 29.4241,
        longitude: -98.4936,
    },
    {
        location: "San Diego",
        latitude: 32.7157,
        longitude: -117.1611,
    },
    {
        location: "Dallas",
        latitude: 32.7767,
        longitude: -96.797,
    },
    {
        location: "San Jose",
        latitude: 37.3382,
        longitude: -121.8863,
    },
    {
        location: "dhaka",
        latitude: 23.8041,
        longitude: 90.4152,
    },
    {
        location: "chittagong",
        latitude: 22.3569,
        longitude: 91.7832,
    },
    {
        location: "sylhet",
        latitude: 24.8949,
        longitude: 91.8687,
    },
    {
        location: "rajshahi",
        latitude: 24.3745,
        longitude: 88.6042,
    },
    {
        location: "khulna",
        latitude: 22.8456,
        longitude: 89.5403,
    },
    {
        location: "barishal",
        latitude: 22.701,
        longitude: 90.3535,
    },
    {
        location: "rangpur",
        latitude: 25.7439,
        longitude: 89.2752,
    },
    {
        location: "comilla",
        latitude: 23.4607,
        longitude: 91.1809,
    },
    {
        location: "narayanganj",
        latitude: 23.6337,
        longitude: 90.4966,
    },
    {
        location: "gazipur",
        latitude: 23.9985,
        longitude: 90.4206,
    },
    {
        location: "narsingdi",
        latitude: 23.9322,
        longitude: 90.7159,
    },
    {
        location: "tangail",
        latitude: 24.2513,
        longitude: 89.9167,
    },
    {
        location: "kishoreganj",
        latitude: 24.4448,
        longitude: 90.7762,
    },
    {
        location: "manikganj",
        latitude: 23.8583,
        longitude: 90.0047,
    },
    {
        location: "munshiganj",
        latitude: 23.5422,
        longitude: 90.5305,
    },
    {
        location: "kolkata",
        latitude: 22.5726,
        longitude: 88.3639,
    },
    {
        location: "delhi",
        latitude: 28.7041,
        longitude: 77.1025,
    },
    {
        location: "mumbai",
        latitude: 19.076,
        longitude: 72.8777,
    },
    {
        location: "chennai",
        latitude: 13.0827,
        longitude: 80.2707,
    },
    {
        location: "bangalore",
        latitude: 12.9716,
        longitude: 77.5946,
    },
    {
        location: "hyderabad",
        latitude: 17.385,
        longitude: 78.4867,
    },
    {
        location: "pune",
        latitude: 18.5204,
        longitude: 73.8567,
    },
    {
        location: "kochi",
        latitude: 9.9312,
        longitude: 76.2673,
    },
    {
        location: "ahmedabad",
        latitude: 23.0225,
        longitude: 72.5714,
    },
    {
        location: "surat",
        latitude: 21.1702,
        longitude: 72.8311,
    },
    {
        location: "jaipur",
        latitude: 26.9124,
        longitude: 75.7873,
    },
    {
        location: "lucknow",
        latitude: 26.8467,
        longitude: 80.9462,
    },
    {
        location: "kanpur",
        latitude: 26.4499,
        longitude: 80.3319,
    },
    {
        location: "nagpur",
        latitude: 21.1458,
        longitude: 79.0882,
    },
    {
        location: "patna",
        latitude: 25.5941,
        longitude: 85.1376,
    },
    {
        location: "indore",
        latitude: 22.7196,
        longitude: 75.8577,
    },
    {
        location: "thane",
        latitude: 19.2183,
        longitude: 72.9781,
    },
    {
        location: "bhopal",
        latitude: 23.2599,
        longitude: 77.4126,
    },
];

function getLocations() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const filtered = data.filter(
        (item) => item.location.toLowerCase() === location
    );

    if (filtered.length > 0) {
        return filtered[0];
    } else {
        const defaultLocation = {
            location: "",
            latitude: 0,
            longitude: 0,
        };
        return defaultLocation;
    }
}

export { getLocationByName, getLocations };
