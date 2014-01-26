

function Controller($scope) {
    $scope.tickets = ['test1', 'test2'];

    $scope.addTicket = function () {
        $scope.tickets.push($scope.newTicket);
    };
}