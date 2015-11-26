var should = require('chai').should(),
    nvec = require('../console');

describe('#equals', function() {
    it('verifies two vectors are equal', function() {
        vec = [1, 2, 3, 4];
        nvec.equals(vec,vec).should.equal(true);
    });

    it('verifies two vectors of different length are not equal', function() {
        vec1 = [1, 2, 3, 4];
        vec2 = [1, 2, 3];
        nvec.equals(vec1,vec2).should.equal(false);
    });

    it('verifies two vectors with different elements are not equal', function() {
        vec1 = [1, 2, 3, 4];
        vec2 = [1, 2, 3, 5];
        nvec.equals(vec1,vec2).should.equal(false);
    });
});