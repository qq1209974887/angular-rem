/*使用实例1：
*   <html ng-rem="375">    //ng-rem用于设置设计图宽度，例如：375表示设计图宽度为375px;
*   angular.module('app', ['Rem'])
* 使用实例2：
*   <html ng-rem>          //ng-rem不设置任何值，使用默认值为375;
*   angular.module('app', ['Rem'])
*/
;(function(){
"use strict";
angular.module('Rem',[])
    .directive('ngRem',['$rootScope',function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                    recalcs = function () {
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
})();
