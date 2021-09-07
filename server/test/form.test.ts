import {expect} from 'chai';
import app from '../src/app';
import {agent as request} from 'supertest';


/**
 * Test POST /api/forms
 */
describe("POST /api/forms", () => {
    // Correct body
    it('should respond with 200', async function () {
        const data = {
            name: "Encuesta de prueba",
            description: "Esta es una encuesta de prueba",
            questions: [
                {
                    question_type: "Texto",
                    text: "Quien fue Napoleon?"
                },
                {
                    question_type: "Seleccion multiple",
                    text: "Cuantos planetas existen en el sistema solar?",
                    options: ["8","9","10"]
                }
            ]
        }
        const res = await request(app)
            .post('/api/forms')
            .send(data);
        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
    });

    // Incorrect body, missing required field 'name'
    it('should respond with 409', async function () {
        const data = {
            description: "Esta es una encuesta de prueba",
            questions: [
                {
                    question_type: "Texto",
                    text: "Quien fue Napoleon?"
                },
                {
                    question_type: "Seleccion multiple",
                    text: "Cuantos planetas existen en el sistema solar?",
                    options: ["8","9","10"]
                }
            ]
        }
        const res = await request(app)
            .post('/api/forms')
            .send(data);
        expect(res.status).to.equal(409);
        expect(res.body).to.be.empty;
    });

    // Incorrect body, missing required field 'description'
    it('should respond with 409', async function () {
        const data = {
            name: "Encuesta de prueba",
            questions: [
                {
                    question_type: "Texto",
                    text: "Quien fue Napoleon?"
                },
                {
                    question_type: "Seleccion multiple",
                    text: "Cuantos planetas existen en el sistema solar?",
                    options: ["8","9","10"]
                }
            ]
        }
        const res = await request(app)
            .post('/api/forms')
            .send(data);
        expect(res.status).to.equal(409);
        expect(res.body).to.be.empty;
    });

    // Incorrect body, missing required field 'text' from question
    it('should respond with 409', async function () {
        const data = {
            name: "Encuesta de prueba",
            description: "Esta es una encuesta de prueba",
            questions: [
                {
                    question_type: "Texto"
                },
                {
                    question_type: "Seleccion multiple",
                    text: "Cuantos planetas existen en el sistema solar?",
                    options: ["8","9","10"]
                }
            ]
        }
        const res = await request(app)
            .post('/api/forms')
            .send(data);
        expect(res.status).to.equal(409);
        expect(res.body).to.be.empty;
    });

    // Empty body
    it('should respond with 409', async function () {
        const data = {}
        const res = await request(app)
            .post('/api/forms')
            .send(data);
        expect(res.status).to.equal(409);
        expect(res.body).to.be.empty;
    });
});