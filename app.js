(function () {
    'use strict';

    angular.module('app', [])
    .controller('main', function ($scope, $timeout) {
        // --> Number of lines here <--
        $scope.number = 15;

        // Arrays erstellen
        $scope.red = Array($scope.number);
        $scope.green = Array($scope.number);
        $scope.value = Array($scope.number);
        $scope.repeat = Array($scope.number);

        // Arrays initialisieren
        for (var i = 0; i < $scope.number; i++) {
            $scope.red[i] = false;
            $scope.green[i] = false;
            $scope.value[i] = 5;
            $scope.repeat[i] = i;
        }

        var x = function () {
            for (var i = 0; i < $scope.number; i++) {
                var choose = Math.floor(Math.random() * 3) + 1;
                if (choose == 1) {
                    $scope.value[i] += 1;
                    $scope.green[i] = true;
                }
                else if (choose == 2) {
                    $scope.value[i] -= 1;
                    $scope.red[i] = true;
                }
            }

            $timeout(function () {
                for (var i = 0; i < $scope.number; i++) {
                    $scope.red[i] = false;
                    $scope.green[i] = false;
                }
            }, 400);

            $timeout(x, 1500);
        };

        $timeout(x, 100);
    });
})();
