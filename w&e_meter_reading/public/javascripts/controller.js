angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope','$rootScope','SwapiService','$http',function ($scope,$rootScope,SwapiService,$http) {

  
    $scope.name = $rootScope.name;
    console.log($scope.name);

    $scope.profileNum = $rootScope.profileNum;

    var userinfo = SwapiService.userinfo($scope.profileNum);
    userinfo.then(function successCallBack(response){
        $rootScope.allusers = response;
        console.log(response);
    })

}])
.controller('loginCtrl', ['$scope','$rootScope','SwapiService','$http','$state',function ($scope,$rootScope,SwapiService,$http,$state) {
    
    $scope.datas = {};
        
                $scope.login = function(datas){
        
                var username = $scope.datas.username;
                var password = $scope.datas.password;
        
                    var loginn = SwapiService.login();
                    console.log(loginn);
                    if(username == loginn[0].profNumber && password == loginn[0].password)
                    {
                        $rootScope.name = loginn[0].name;

                        $rootScope.details = {elecM : 123456, waterM : 987654 };
                                    alert("Welcome how r u my friend ");
                        $state.go("home");
                        //$state.go("main");
                    }
                    else
                    {
                        alert("Wrong credentials ");
                    }
                   /* loginn.then(function successCallBack(response) {
           
                        if(response.data.length == 0)
                        {
                            window.alert("Wrong password or profile number");
                        }
                        else
                        {
                            if(username == response.data[0].profileNum && password == response.data[0].password)
                            {
                                $rootScope.details = response.data[0];
                                $rootScope.name = response.data[0].name;
                                $rootScope.profileNum = response.data[0].profileNum;
                                console.log($rootScope.name);
                                $scope.person = "successfully logged in";
                                window.alert($scope.person);
                                $state.go("home");
                            }
                        }
                        
                    }, function errorCallback(response) {
        
                        $scope.regist = response;
                        window.alert($scope.regist);
                    })*/
                }
    
    
}])
.controller('registerCtrl', ['$scope','$state','$rootScope','SwapiService','$http',function ($scope, $state,$rootScope,SwapiService,$http) {
    
    var person = {
                    name: "",
                    surname: "",
                    identity: "",
                    resAddress: "",
                    elecM: "",
                    waterM: "",
                    gender : "",
                    profileNum : "",
                    password : "",
                    contactDetails : {
                        cellNumber : "",
                        emailAddress : "",
                    },
                      role : "",
                    
                }

                

                console.log(person);
        
                $scope.registe = function (person) {

                    $rootScope.login = {
                        emailAddress : person.contactDetails.emailAddress,
                        password : person.password,
                        profNumber : person.profileNum
                    }
                    $rootScope.waterMeterNumber = {
                        waterM : person.waterM
                    }
                    $rootScope.electricNumber = {
                        elecM : person.elecM
                    }

                    console.log($rootScope.login);
                    console.log(person);
                    console.log("Im working");
        
                    var perso = SwapiService.register(person);
        
                    perso.then(function successCallBack(response) {
                        $scope.person = response;
                        console.log($rootScope.login);
                        var logins = SwapiService.postLogin($rootScope.login);
                        logins.then(function successCallBack(response){
                            $scope.logs = response;
                            console.log($scope.logs);
                            var waterM = SwapiService.postWaterMeter($rootScope.waterMeterNumber);
                            waterM.then(function successCallBack(response){

                                var elecM = SwapiService.postElectricMeter($rootScope.electricNumber);
                                elecM.then(function successCallBack(response){

                                })
                            })
                        }, function errorCallback(response) {
                            $scope.logs = response;
                            console.log($scope.logs);
                        })

                        $state.go("login");
                        alert($scope.person);
                    }, function errorCallback(response) {
                        $scope.regist = response;
                        console.log($scope.regist);
                    })
                }
    
    
}])
.controller('balancesCtrl', ['$scope','$state','$rootScope','SwapiService','$http',function($scope, $state,$rootScope,SwapiService,$http){

    $scope.name = $rootScope.name;

}])
.controller('contactCtrl', ['$scope','$state','$rootScope','SwapiService','$http',function($scope, $state,$rootScope,SwapiService,$http){
    
       
    
}])
.controller('monthlyCtrl', ['$scope','$state','$rootScope','SwapiService','$http',function($scope, $state,$rootScope,SwapiService,$http){
    $scope.disable = true;
    $scope.name = $rootScope.name;
    $scope.details  = $rootScope.details;

    $scope.today = new Date();

    $rootScope.waterReadings = [{waterRead : 50, waterM : 987654 },
        {waterRead : 150, waterM : 987654 },
        {waterRead : 170, waterM : 987654 }];

    $scope.electricReadings = [{electricRead : 123, elecM : 123456 },
        {electricRead : 13, elecM : 123456 },
        {electricRead : 16, elecM : 123456 },
        {electricRead : 450, elecM : 123456 }];
        console.log($scope.electricReadings);
    /*$scope.waterReadings = $rootScope.allusers.data[0].waterReadings[0];
    $scope.electricReadings = $rootScope.allusers.data[0].electricityReadings[0];
    console.log($scope.waterReadings);
    console.log($scope.electricReadings);*/
    
}])
.controller('emeterCtrl', ['$scope','$state','$rootScope','SwapiService','$http','$modal',function($scope, $state,$rootScope,SwapiService,$http,$modal){
    $scope.disable = true;
    $scope.name = $rootScope.name;
    $scope.details  = $rootScope.details;

    /*var electricNumber = $scope.details.elecM;

    var ereading = {
        readingsE: "",
    }

    $scope.ereadings = function (ereading) {
        
                    console.log(ereading);
        
                    var eread = SwapiService.putElectricReadings(electricNumber,ereading);
        
                    eread.then(function successCallBack(response) {
                        $scope.person = response;
                        $modal.open({
                            templateUrl: "templates/popup/wstatus.html",
                            scope: $scope,
                            controller: "closePopupsCtrl"
                          })
                    }, function errorCallback(response) {
                        $scope.person = response;
                        console.log($scope.person);
                    })
                }*/
    
}])
.controller('wmeterCtrl', ['$scope','$state','$rootScope','SwapiService','$http','$modal',function($scope, $state,$rootScope,SwapiService,$http,$modal){
    $scope.disable = true;
    $scope.name = $rootScope.name;
    $scope.details  = $rootScope.details;

    /*var waterNumber = $scope.details.waterM;

    var wreading = {
        readingsW: "",
    }

    $scope.wreadings = function (wreading) {
        
                    console.log(wreading);
        
                    var wread = SwapiService.putWaterReadings(waterNumber,wreading);
        
                    wread.then(function successCallBack(response) {
                        
                        $scope.wread = response;

                        $modal.open({
                          templateUrl: "templates/popup/wstatus.html",
                          scope: $scope,
                          controller: "closePopupsCtrl"
                        })
                        console.log($scope.wread);
                    }, function errorCallback(response) {
                        $scope.wread = response;
                        console.log($scope.wread);
                    })
                }
*/
}])
.controller('popupsCtrl', function ($scope, $state, $modal) {

    $scope.enterW = function () {
        $modal.open({
          templateUrl: '/templates/popup/wmeter.html',
          controller: "closePopupsCtrl",
  
        })
  
      }

      $scope.enterE = function () {
        $modal.open({
          templateUrl: '/templates/popup/emeter.html',
          controller: "closePopupsCtrl",
  
        })
  
      }
})
.controller('closePopupsCtrl', function ($scope, $state, $modal,$modalStack) {

    $scope.close = function () {

        $modalStack.dismissAll('cancel');
      
        $state.reload();
      };
})