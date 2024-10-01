const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // นำเข้าไฟล์ app.js

const { expect } = chai;
chai.use(chaiHttp);

describe('Node.js API Test', () => {
    it('should return welcome message', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message').eql('Welcome to Node.js API!');
                done();
            });
    });

    it('should return user data with ID', (done) => {
        const userId = 1;
        chai.request(app)
            .get(`/api/users/${userId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('userId').eql(`${userId}`);
                done();
            });
    });
});

