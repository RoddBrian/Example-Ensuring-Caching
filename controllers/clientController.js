const clients = require('../models/clientModel');

const getAllClients = (req, res) => {
    res.json(clients);
};

const getClientById = (req, res) => {
    const client = clients.find(c => c.id === parseInt(req.params.id));
    if (!client) return res.status(404).json({ message: 'Client not found' });
    res.json(client);
};

const createClient = (req, res) => {
    const newClient = {
        id: clients.length + 1,
        name: req.body.name,
        email: req.body.email,
    };
    clients.push(newClient);
    res.status(201).json(newClient);
};

const updateClient = (req, res) => {
    const client = clients.find(c => c.id === parseInt(req.params.id));
    if (!client) return res.status(404).json({ message: 'Client not found' });
    client.name = req.body.name || client.name;
    client.email = req.body.email || client.email;
    res.json(client);
};

const deleteClient = (req, res) => {
    const clientIndex = clients.findIndex(c => c.id === parseInt(req.params.id));
    if (clientIndex === -1) return res.status(404).json({ message: 'Client not found' });
    clients.splice(clientIndex, 1);
    res.status(204).send();
};

module.exports = {
    getAllClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient
};
