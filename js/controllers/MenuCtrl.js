/**
 * Created by aksil on 26/04/2016.
 */

angular.module('app').controller('MenuCtrl',['$scope','$rootScope','LocaleService','$aside', function($scope,$rootScope,LocaleService,$aside){
    $rootScope.titre_test=1;
    $rootScope.clopen=1;
    $rootScope.openAside = function(position) {
            $aside.open({
                templateUrl: 'partials/menu.html',
                placement: position,
                backdrop: true,
                controller: function($scope, $uibModalInstance) {
                     $rootScope.cancel = function(e)
                     {
                         $uibModalInstance.dismiss();
                         e.stopPropagation();
                         $rootScope.clopen=1;
                         console.log("bn ft");
                     };
                    $rootScope.clopen=0;
                }
            })
    };
    $rootScope.currentLocaleDisplayName="Francais";
    $scope.sensMenu="left";
    $rootScope.changeL=function()
    {

        if($rootScope.currentLocaleDisplayName=="Francais")
        {
            $rootScope.currentLocaleDisplayName="Arabe";
        }else{
            $rootScope.currentLocaleDisplayName="Francais";
        }
        LocaleService.setLocaleByDisplayName($rootScope.currentLocaleDisplayName);
        if($rootScope.currentLocaleDisplayName=="Francais"){
            $rootScope.text_right_menu="";
            $rootScope.to_right="";
            $rootScope.to_left="";
            $rootScope.toggel_arabe="";
            $rootScope.pull_arabe="";
            $rootScope.margin_menu="";

            $scope.sensMenu="left";
            $rootScope.float_right="";
            $rootScope.float_left="";
            $rootScope.text_right="";
            $rootScope.top_arab="";
        }else{
            $rootScope.text_right_menu="text-right-menu";
            $rootScope.to_right="float-right";
            $rootScope.to_left="float-left";
            $rootScope.toggel_arabe="toggel-arabe";
            $rootScope.pull_arabe="pull-arabe-langue";
            $rootScope.margin_menu="margin-menu";

            $scope.sensMenu="right";
            $rootScope.float_right="float-right";
            $rootScope.float_left="float-left";
            $rootScope.text_right="text-right";
            $rootScope.top_arab="top-arab";
        }
    }

    $rootScope.active_men = 'DERNIER_ANNONCE';
    $rootScope.getActiveMen = function(){
        return $rootScope.active_men;
    };
    $rootScope.setActiveMen = function(val){
        $rootScope.active_men = val;
    };
}]);