var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui.router', 'ngResource']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // Define routes
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: MyApp.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('movies', {
            url: '/movies',
            templateUrl: '/ngApp/views/movies.html',
            controller: MyApp.Controllers.MoviesListController,
            controllerAs: 'controller'
        })
            .state('add', {
            url: '/add',
            templateUrl: '/ngApp/views/add.html',
            controller: MyApp.Controllers.MoviesAddController,
            controllerAs: 'controller',
        })
            .state('edit', {
            url: '/edit/:id',
            templateUrl: '/ngApp/views/edit.html',
            controller: MyApp.Controllers.MoviesEditController,
            controllerAs: 'controller'
        })
            .state('delete', {
            url: '/delete/:id',
            templateUrl: '/ngApp/views/delete.html',
            controller: MyApp.Controllers.MoviesDeleteController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/');
        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map