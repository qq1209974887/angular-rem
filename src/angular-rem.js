/*使用实例1：
*   <html ng-rem="375">    //ng-rem用于设置设计图宽度，例如：375表示设计图宽度为375px;
*   angular.module('app', ['Rem'])
* 使用实例2：
*   <html ng-rem>          //ng-rem不设置任何值，使用默认值为375;
*   angular.module('app', ['Rem'])
*/
(function (root, factory) {
    'use strict';

    /* 检测各种环境下的依赖是否存在，并将依赖对象注入到factory工厂中 */
    if (typeof define === 'function' && define.amd) {
        /* AMD规范 */
        define(['angular'], factory);
    } else if (root.hasOwnProperty('angular')) {
        // 直接通过script标签引入方式，如果依赖未加载或不存在，将报错
        factory(root.angular);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('angular'));
    }
}(this, function (angular) {
    'use strict';

    angular = (angular && angular.module) ? angular : window.angular;
    angular.module('Rem', []).directive('ngRem', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
                var recalcs = function () {
                    var clientWidth = document.documentElement.clientWidth;
                    if (!clientWidth) return;
                    if (attrs.ngRem) {
                        elem[0].style.fontSize = (100 * (clientWidth / attrs.ngRem) + 'px');
                    } else {
                        elem[0].style.fontSize = (100 * (clientWidth / 375) + 'px');
                    }
                };
                recalcs();
                window.addEventListener(resizeEvt, recalcs, false);
            }
        }
    }]);
}));
