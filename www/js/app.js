// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var getTime;
angular.module('starter', ['ionic'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .controller('videoController', function ($scope) {

        /* ++++++++++++++++++ Comment 26th March, 2015 ++++++++++++++++++++++

         Here I have used two basic functions using the HTML5 video element. There are multiple methods available for the video
         . For example: controls, autoplay, restart, fast forward, rewind, play, stop, pause. For our case we just be needing start
         and pause so I have used only these two methods. When we put the finger on the screen, the on-touch method is called and
         so does the playVideo function and it plays the video.
         When we remove the finger so on-release method is called which also calls the stopVideo function and so it makes
         the video to pause state.



         */

        $scope.videoTime=0;

        var video = document.getElementById("youtubeVideo");



        $scope.playVideo = function() {



            if (video.paused) {
                video.play();

                $scope.timer = setInterval(function () {

                    $scope.$digest($scope.videoTime++);
                    console.log('Playing')

                },1000);


            }
            else{

                video.pause();
                clearInterval($scope.timer);
            }
        };

        //else condition is used because when I release the mouse click so video should pause.


        $scope.stopVideo=function(){

            video.pause();
            clearInterval($scope.timer);
        };














    });
