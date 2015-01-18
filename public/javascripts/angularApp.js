angular.module('first-mean-app', ['ui-router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $stateProvider
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])
.factory('posts', [function(){
  var o = {
    posts: [      
      {title: 'My website', upvotes: 20, link: 'http://krishn.me'},
      {title: 'Hacker News', upvotes: 2, link: 'http://news.ycombinator.com'},
      {title: 'Product Hunt', upvotes: 15, link: 'http://producthunt.com'},
      {title: 'The Verge', upvotes: 9, link: 'http://theverge.com'},
      {title: 'TechCrunch', upvotes: 4, link: 'http://techcrunch.com'}]
  };
  return o;
}])
.controller('MainCtrl', [
'$scope',
'posts',
  function($scope, posts){
    
    $scope.posts = posts.posts;
    
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]
      }); 
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
}])
.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];
  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };
}]);