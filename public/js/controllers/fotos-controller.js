angular.module('decapp').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];
    $scope.filtr = '';

    $http.get('/v1/fotos')
    .success(function(fotos) {
        console.log(fotos);
        $scope.fotos = fotos; // não precisa fazer retorno.data
    })
    .error(function(erro) {
        console.log(erro);
    });

});
