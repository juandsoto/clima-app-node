const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima.getClima(40.67, -73.94).then(console.log).catch(e => console.log('Error', e));

const getInfo = async(direccion) => {
    console.log('Cargando...'.italic.yellow);
    const city = await lugar.getLugarLatLng(direccion).catch(console.log);
    const temperature = await clima.getClima(city.lat, city.lng).catch(console.log);

    console.log(`El clima de ${city.direccion} es de ${temperature}°C`.green);
}
getInfo(argv.direccion).catch(e => console.log('Intenta de nuevo escribiendo un nombre correcto!'.green));