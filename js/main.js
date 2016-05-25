/**
 * Created by aksil on 26/04/2016.
 */

var app = angular.module('app', ['ui.router','ui.bootstrap','pascalprecht.translate','ngResource','ngAside']);
app.run(function($rootScope,$state) {
    $rootScope.states = {};
    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams) {
        $rootScope.previousState = from.name;
    });
    if(window.StatusBar) {
        StatusBar.styleDefault();
    }
});
app.constant('DEBUG_MODE', /*DEBUG_MODE*/true/*DEBUG_MODE*/);
app.constant('LOCALES', {
    'locales': {
        'fr_FR': 'Francais',
        'ar_MR': 'Arabe'
    },
    'preferredLocale': 'fr_FR'
});
app.config(['$stateProvider','$urlRouterProvider','$sceProvider',function($stateProvider,$urlRouterProvider,$sceProvider) {
    $sceProvider.enabled(false);
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "partials/menuSide.html",
            controller: 'MenuCtrl'
        })
        .state('app.home', {
            url: "/home",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "partials/home.html",
                    controller: 'HomeCtrl'
                }
            }
        });
    $urlRouterProvider.otherwise('/app/home');
}]);
app.config(['$translateProvider','DEBUG_MODE', 'LOCALES',function ($translateProvider,DEBUG_MODE, LOCALES) {
    if (DEBUG_MODE) {
        $translateProvider.useMissingTranslationHandlerLog();
    }
    $translateProvider.useStaticFilesLoader({
        prefix: 'js/services/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage(LOCALES.preferredLocale);
    $translateProvider.useSanitizeValueStrategy('escape');
}])
