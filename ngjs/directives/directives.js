//DIRECTIVES
weatherApp.directive("weatherReport", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
})


weatherApp.directive("jokeView", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/jokeView.html',
        replace: true,
        scope: {
            jokeDetail: "="
        }
    }
})

weatherApp.directive("newsView", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/newsView.html',
        replace: true,
        scope: {
            newsDetail: "="
        }
    }
})

