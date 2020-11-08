/* Example-1：
 *   <html ng-app="app" rem="375">    // ng-rem指令用于设置设计图宽度，例如：375表示设计图宽度为375px;
 *   angular.module('app', ['ngRem'])
 * Example-2：
 *   <html ng-app="app" rem>          // ng-rem指令不设置任何值，使用默认值为375;
 *   angular.module('app', ['ngRem'])
 */
(function (root, factory) {
    'use strict';

    /* Detect the existence of dependencies in various environments and inject dependency objects into the factory method */
    if (typeof define === 'function' && define.amd) {
        /* AMD */
        define(['angular'], factory);
    } else if (root.hasOwnProperty('angular')) {
        // script
        factory(root.angular);
    } else if (typeof exports === 'object') {
        // node
        module.exports = factory(require('angular'));
    }
}(this, function (angular) {
    'use strict';

    var rem = function (elem, attrs) {
        elem = elem ? elem : document.getElementsByTagName("html");

        var clientWidth = document.documentElement.clientWidth;
        if (!clientWidth) return;
        if (attrs.rem) {
            elem[0].style.fontSize = (100 * (clientWidth / attrs.rem) + 'px');
        } else {
            elem[0].style.fontSize = (100 * (clientWidth / 375) + 'px');
        }
    };

    angular = (angular && angular.module) ? angular : window.angular;

    var remDirective = {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
            var setRem = function () {
                rem(elem, attrs);
            };
            setRem();
            window.addEventListener(resizeEvt, setRem, false);
        }
    };
    angular.module('ngRem', [])
        .directive('ngRem', [function () {
            return remDirective
        }])
    ;
    /* Deprecated: 2.0.0 */
    angular.module('Rem', [])
        .directive('ngRem', ['$rootScope', function ($rootScope) {
            console.warn('"Rem"不符合语义，将在v1.0.0版本中废弃，请使用"ngRem"替代: app.module("app",["ngRem"])')
            return remDirective
        }])
    ;
}));
