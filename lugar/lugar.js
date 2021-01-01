const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '02ae78b131msh26aa09c5ed78585p1b7526jsn817a4a18efd5' }
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        console.log(`No hay resultados para ${dir}`);
        return;
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}