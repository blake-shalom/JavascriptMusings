var myApp = angular.module('dragndropApp', ['ngDragDrop', 'ui.router']);


myApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl: '/templates/home.html',
            controller: 'homeCtrl'
        })

        .state('basic',{
            url: '/basic',
            templateUrl: '/templates/basic.html',
            controller: 'basicDropCtrl'
        })

        .state('smello', {
            url: '/smello',
            templateUrl: '/templates/smello.html',
            controller: 'smelloCtrl'
        });
    $urlRouterProvider.otherwise('/home');

});

myApp.controller('basicDropCtrl', function($scope) {
    $scope.list1 = {title: 'Drag me in the box'};
    $scope.list2 = {};
});

myApp.controller('homeCtrl', function($scope){

});

myApp.controller('navCtrl', function($scope){
    $scope.navOptions = [{title: 'Home', link:'home'},
                        {title: 'Basic', link:'basic'},
                        {title: 'Smell-o', link:'smello'}];
});

myApp.controller('smelloCtrl', function($scope) {
    $scope.canAddColumn = true;
    $scope.columns = [];
    $scope.addColumn = function(){
        var nextCol = $scope.columns.length + 1;
        $scope.columns.push({name:"", id:nextCol, hasName:false, drag:true, tasks:[]})
        $scope.canAddColumn = false;
    }
    $scope.addTask = function(id){
        angular.forEach($scope.columns, function(column,index){
            if (column.id == id) {
                var nextCol = column.tasks.length + 1;
                column.tasks.push({name:"", id:nextCol, hasName:false});
            }
        })
    }
    $scope.assignName = function(id) {
        for (var i = 0; i < $scope.columns.length; i++) {
            if ($scope.columns[i].id == id) {
                $scope.columns[i].hasName = true;
                $scope.columns[i].drag = false;
                $scope.canAddColumn = true;
                break;
            }
        }
    }
    $scope.assignTask = function(columnID, taskID) {
        angular.forEach($scope.columns, function(column,index){ 
            if (column.id == columnID) {
                angular.forEach(column.tasks, function(task, index){
                    if (task.id == taskID){
                        task.hasName = true;
                    }
                })
            }
        })
    }
});