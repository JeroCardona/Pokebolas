// Import Pokeneas data
const pokeneas = require('../data/pokeneas');

/**
 * Get a random Pokenea object.
 * @returns {Object} A random Pokenea object with all fields.
 */
function getRandomPokenea() {
    if (pokeneas.length === 0) {
        throw new Error("Pokeneas array is empty. Please populate the data.");
    }

    const randomIndex = Math.floor(Math.random() * pokeneas.length);
    return pokeneas[randomIndex];
}


/**
 * Get a random Pokenea with selected fields.
 * @returns {Object} A random Pokenea object with specific fields.
 */
function getRandomPokeneaData() {
    const pokenea = getRandomPokenea();
    return {
        id: pokenea.id,
        name: pokenea.name,
        height: pokenea.height,
        ability: pokenea.ability,
    };
}

const os = require('os');

/**
 * Get the container or host ID.
 * If running locally, return the hostname of the machine.
 * @returns {string} The container ID or hostname.
 */
function getContainerId() {
    // Si la variable de entorno CONTAINER_ID está definida, úsala
    if (process.env.CONTAINER_ID) {
        return process.env.CONTAINER_ID;
    }
    // Si no, usa el nombre del host de la máquina
    return os.hostname();
}

module.exports = {
    getContainerId,
};
/**
 * Controller function to handle the /pokenea route.
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @returns {void}
 */
function pokeneaJsonHandler(req, res) {
    const pokenea = getRandomPokeneaData();
    const containerId = getContainerId();

    res.json({
        ...pokenea,
        containerId: containerId,
    });
}

/**
 * Controller function to handle the /pokenea/philosophy route.
 * @param {Object} req Express request object.
 * @param {Object} res Express response object.
 * @returns {void}
 */
function pokeneaPhilosophyHandler(req, res) {
    const pokenea = getRandomPokenea();
    const containerId = getContainerId();

    res.render('pokeneaView', {
        name: pokenea.name,
        image: pokenea.image,
        phrase: pokenea.phrase,
        containerId: containerId,
    });
}

module.exports = {
    pokeneaJsonHandler,
    pokeneaPhilosophyHandler,
};
