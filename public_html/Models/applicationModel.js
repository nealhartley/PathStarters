/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//model for ther pathstarters angular application

// Define the `phonecatApp` module
var PathwayApp = angular.module('PathwayApp', []);

// Define the `Blogcontroller` controller on the `BlogApp` module
PathwayApp.controller('PathwayController', function PathwayController($scope) {
  //blog postings 
  
  //months that blogs can be a part of
  $scope.months = [
    {
        name : 'March'
    },
      
    {
        name: 'April'
    },
    
    {
        name: 'May'
    }
  ];
  
  //individual posts
  $scope.posts = [
    {
        month : 'March',
        date: '15th March',
        description: 'today Kenyon ate a tiny lemon and it was very sour'
    },
    
    {
        month : 'March',
        date: '23rd March',
        description: 'today Paul asked Jonnie for a shredder, Jonnie was not pleased!'
    },
    
    {
        month : 'April',
        date : '4th April',
        description : 'Second stipend should be coming through soon '
    },
    
    {
        month : 'May',
        date : '4th May',
        description : 'Still no stipend, oh well, I have enough savings to last another week '
    },
    
    {
        month : 'May',
        date : '15th May',
        description : 'NO STIPEND! We have had to start eating each other. The life of an entrepreneur is harder than I ever could have imagined '
    },
    
    {
        month : 'May',
        date : '16th May',
        description : 'I am the last one left. At this point I no longer remember why I am coming here every day '
    }
      
  ];
  
  
});

