angular.module('decapp').controller('FotosController', function($scope, $http) {

	$scope.fotos = [
		{
			titulo: 'Leão 1',
			url: 'http://www.fundosanimais.com/Minis/leoes.jpg'	
		},
		{
			titulo: 'Leão 2',
			url: 'http://www.fundosanimais.com/Minis/leoes.jpg'	
		},
		{
			titulo: 'Leão 3',
			url: 'http://www.fundosanimais.com/Minis/leoes.jpg'	
		},
	];
	$http.get('vi/fotos')
});