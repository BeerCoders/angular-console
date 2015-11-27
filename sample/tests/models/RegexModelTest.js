describe('Testing Regex', function() {

	var Regex,
		httpBackend;

	beforeEach(function(){
		module('sampleApp');

		inject(function($httpBackend, CONFIG, _Regex_) {
      		httpBackend = $httpBackend;
      		CONFIG = CONFIG:
      		Regex = _Regex_;
    	});
	});

	// afterEach(function() {
	//     httpBackend.verifyNoOutstandingExpectation();
	//     httpBackend.verifyNoOutstandingRequest();
 	// });

  	it('REST Regex getAll action [GET]', function (){

	    var returnData = true;
	    
	    httpBackend
	    	.expectGET(CONFIG.domain + '/regexes')
	    	.respond(returnData);
	    
	    var returnedPromise = Regex.getAll();
	    
	    var result;
	    returnedPromise.then(function(response) {
	      result = response;
	    });
	    
	    httpBackend.flush();
	    
	    expect(result).toEqual(returnData);
	}); 

	it('REST Regex getById action [GET]', function (){

		var returnData = true;
	    
	    httpBackend
	    	.expectGET(CONFIG.domain + '/regexes/1')
	    	.respond(returnData);
	    
	    var returnedPromise = Regex.getAll();
	    
	    var result;
	    returnedPromise.then(function(response) {
	      result = response;
	    });
	    
	    httpBackend.flush();
	    
	    expect(result).toEqual(returnData);

	});

	it('REST Regex create action [POST]', function (){

	});

	it('REST Regex update action [PUT]', function (){

	});

	it('REST Regex remove action [DELETE]', function (){

	});

});
