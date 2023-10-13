const fetchByAnimals = require('../../controllers/api/fetchRoutes')
const location = 'CO'//hardcoded location

class SearchLogic {
    constructor() {
        console.log("Search Logic Loaded");
    }

    async initializeFetcher(animalType) {
        try {
            console.log(`intialize fetcher type ${animalType}`)
            const fetcher = fetchByAnimals(animalType);//hardcoded location for testing
            console.log('fetchSuccess');
            // console.log(fetcher)
            return fetcher;
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }
}

module.exports = SearchLogic;

