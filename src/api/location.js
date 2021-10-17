export const getUserLocation = async (lat, lon) => {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`;
    const data = await fetch(url);

    return await data.json();
};