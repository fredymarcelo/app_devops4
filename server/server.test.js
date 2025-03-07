const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.json({ message: "¡Hola, DevOps EPN! 🚀 Tu API está funcionando correctamente." });
});

describe('GET /', () => {
    it('Debe devolver un mensaje JSON de bienvenida', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });
});
