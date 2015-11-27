describe('Testing Sample', function() {

	var Sample,
		httpBackend;

	beforeEach(function(){
		module('sampleApp');

		inject(function($httpBackend, CONFIG, _Sample_) {
      		httpBackend = $httpBackend;
      		CONFIG = CONFIG:
      		Sample = _Sample_;
    	});
	});

	// afterEach(function() {
	//     httpBackend.verifyNoOutstandingExpectation();
	//     httpBackend.verifyNoOutstandingRequest();
 	// });

  	it('SERVICE TEST TEMP', function (){

	}); 



});
