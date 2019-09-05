angular.module('test.module')
.component('testComponent', {
        templateUrl: 'test/test.html',
        controller: function(){
            this.word = 'world';
        }
    });