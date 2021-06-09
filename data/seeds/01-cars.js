// STRETCH
const cars = [
    {
        vin: '1D8HB48N18F129086',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '2HGFB6E55DH787865',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',

    },
    {
        vin: 'JKBVNAP183A000151',
        make: 'ford',
        model: 'focus',
        mileage: 15000,

    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}