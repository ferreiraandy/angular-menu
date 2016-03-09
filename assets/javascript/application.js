app
  .controller('retornaContato', function($scope, $http) {
    $http.get("http://teste.imobzi.com/contatos")
    .then(function(response) {
      $scope.contatos = response.data;
    });
  })

  .controller('novoContato', function($scope, $http) {
    $scope.contato = "Novo contato"
  })

  .controller('menuPrincipal', function($scope){
    $scope.menuToggle = function(){
      if($scope.class == "menu-ativo"){
        $scope.class = "";
      }else{
        $scope.class = "menu-ativo";
      }
    }
  })

  .controller('DropdownCtrl', function ($scope, $log) {
    $scope.menuLista = [
      {text: "Home", id: "menu-home", url: "home", items: [] },
      {text: "Contato", id: "menu-contato", url: "#", items: [
        {label: "Contatos", url: "contatos"}, {label: "Novo", url: "novo-contato"}
      ] },
      {text: "Imóvel", id: "menu-imovel", url: "#", items: [
        {label: "Imóveis", url: "#"}, {label: "Novo", url: "#"}
      ] },
      {text: "Proprietário", id: "menu-proprietario", url: "#", items: [
        {label: "Proprietários", url: "#"}, {label: "Novo", url: "#"}
      ] },
      {text: "Outro", id: "menu-outro", url: "#", items: [
        {label: "Outros", url: "#"}, {label: "Novo", url: "#"}
      ] }
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
  });
