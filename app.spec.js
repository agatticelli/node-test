let chai = require('chai')
let chainHttp = require('chai-http')
let app = require('./app')

let expect = chai.expect

chai.use(chainHttp)

describe('Main tests', () => {

  describe('GET /ping', () => {

    it('it should get the string pongui', done => {

      chai.request(app)
        .get('/ping')
        .end((err, res) => {

          expect(err).to.be.null
          expect(res).to.have.status(200)
          expect(res.text).to.be.a('string')
          expect(res.text).to.equal("pongui")

          done()
        })

    })

  })

})