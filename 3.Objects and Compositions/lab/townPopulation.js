function townPopulation(townsArr) {
    const towns={};
    for (let townAsString of townsArr) {
        // Split each string into 'name' and 'population' using ' <-> ' as the separator
        let [name, population] = townAsString.split(' <-> ');
        population = Number(population);
        // Check if the town 'name' already exists in the 'towns' object
        if (towns[name] != undefined) {
        // If the town exists, add the 'population' to the existing value in 'towns'
        population += towns[name];
        }
        // Update the 'towns' object with the new 'population' value for the 'name'
        towns[name] = population;
        }
        for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
        }
        }


townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])

townPopulation(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])