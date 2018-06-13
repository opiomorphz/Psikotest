var app=angular.module('PsikotestApp',[]);

app.run(['$rootScope', function($rootScope){
    $rootScope.changeMenu = function(menu){
        if (menu === 'home'){
            window.location = 'index.html';
        } else if (menu === 'about'){
            window.location = 'about.html';
        } else if (menu === 'download'){
            window.location = 'download.html';
        }else if (menu === 'caraPengerjaan'){
            window.location = 'pengerjaan.html';
        } else if (menu === 'gender'){
            window.location = 'gender.html';
            $rootScope.menu = menu;
        } else {
            $rootScope.menu = menu;
        }
    };
    
}]);