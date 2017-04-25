/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//model for ther pathstarters angular application

// Define the `phonecatApp` module
var PathwayApp = angular.module('PathwayApp', []);

// Define the `Blogcontroller` controller on the `BlogApp` module
PathwayApp.controller('pathwayController', function PathwayController($scope) {
  //blog postings 
  
  //months that blogs can be a part of
  $scope.months = [
    {
        name : 'March'
    },
      
    {
        name: 'April'
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
        description : 'today Scott spoke too loud about Jonnie and Pauls feud and now Jonnies clued in '
    }
      
  ];
});

