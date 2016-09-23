describe("An AngularJS test suite", function () {
    beforeEach(module('ngResource', function($provide) {
        $provide.value('fooVal', 5);
    }));
    
    it('should have tests', function () {
        expect(true).toBe(true);
    });
    
    it('should inject dependences', inject(function ($resource, fooval) {
        expect($resource).toBeDefined();
        expect(fooVal).toBe(5);
    }));
});