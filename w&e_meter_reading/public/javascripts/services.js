angular.module('app.services', [])

    .factory('SwapiService', function ($http) {

        var data = [{name : "Lerato", profNumber : 2000 , password : "34345"},
        {name : "Rider" , profNumber : 2003, password : "12345"},
        {name : "Jabu" , profNumber : 2005 , password : "54321"},
        {name : "Bee", profNumber : 2004 , password : "13795"}]

        return {
            register : function(user){
                var user = $http.post('http://localhost:3000/user',user);
                console.log(user);
                return user;
            },
            postLogin : function(login){
                var login = $http.post('http://localhost:3000/login',login);
                return login;
            },
            login : function (){

                var datas =data;
                console.log(datas);

                /*var logins = $http.get('http://localhost:3000/user/' + username + '/' + password);
                console.log(logins)
                return logins;*/

                return datas;
            }
            ,
            userinfo : function (profNumber){
                var user = $http.get('http://localhost:3000/user/userinfo/' + profNumber);
                console.log(user)
                return user;
            },
            alluser : function (){
                var user = $http.get('http://localhost:3000/user/allusers');
                return user;
            }
            ,
            postWaterMeter : function (waterMeter){
                var water = $http.post('http://localhost:3000/water',waterMeter);
                return water;
            },
            postElectricMeter : function (elecMeter){
                var elec = $http.post('http://localhost:3000/elec',elecMeter);
                return elec;
            },
            putElectricReadings : function (elecMeter,ereading){
                var elecs = $http.put('http://localhost:3000/elec/' + elecMeter,ereading);
                return elecs;
            },
            putWaterReadings : function (waterMeter,wreading){
                var elec = $http.put('http://localhost:3000/water/' + waterMeter,wreading);
                return elec;
            }
        }
    })
