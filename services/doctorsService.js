const client = require("../config/cosmosClient");

async function fetchDoctorsById(id) {
    const database = client.database(process.env.COSMOS_DATABASE);
    const container = database.container("doctors");
    const querySpec = {
        query: "SELECT * FROM c WHERE c.doctor_id = @id",
        parameters: [{ name: "@id", value: id }]
    };
    try {
        const { resources: items } = await container.items.query(querySpec).fetchAll();
        return items[0];
    } catch (error) {
        throw new Error("Items not found", error);
    }
}

module.exports = { fetchDoctorsById };