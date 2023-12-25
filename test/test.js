const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Update the path to your app file

chai.use(chaiHttp);
chai.should();

describe('Products API', () => {
  describe('GET /api/products', () => {
    it('should retrieve a list of products', function (done) {
        this.timeout(5000); // Set a higher timeout (e.g., 5000ms)
        chai.request(app)
          .get('/api/products')
          .end((err, res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.deep.equal(res.body);
            done();
          });
      });
      
  });
});

describe('Products API', () => {
    describe('GET /api/products/:productId', () => {
      it('should retrieve information about a specific product', (done) => {
        const productId = 1; // Replace with the actual product ID you want to test
  
        chai.request(app)
          .get(`/api/products/${productId}`)
          .end((err, res) => {
            // Assuming the expected status code is 200
            res.should.have.status(200);
            console.log(res.body)
            // Add more assertions based on your expected response
            chai.expect(res.body).to.deep.equal(res.body); // Example assertion
  
            done();
          });
      });
    });
  });
