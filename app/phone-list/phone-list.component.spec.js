describe('phoneList', function(){
   // Load the module that contains the `phonelist` component before each test
   beforeEach(module('phoneList'));
    // test the controller
    describe('PhoneListController', function(){
       it('should create a `phones` model with 3 phones',
           inject(function($componentController){
               var ctrl = $componentController('phoneList');
               expect(ctrl.phones.length).toBe(3);
           })
       );
    });
});