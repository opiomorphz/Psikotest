var app=angular.module('PsikotestApp',[]);

app.run(['$rootScope', function($rootScope){
    $rootScope.changeMenu = function(menu){
        if (menu === 'home'){
            window.location = 'index.html';
        } else if (menu === 'about'){
            window.location = 'about.html';
        } else if (menu === 'download'){
            window.location = 'download.html'
        }else {
            $rootScope.menu = menu;
        }
    };
    
}]);