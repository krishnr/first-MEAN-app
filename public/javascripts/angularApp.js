angular.module('first-mean-app', [])
.controller('MainCtrl', [
'$scope',
  function($scope){
    
    $scope.posts = [
      {title: 'My website', upvotes: 20, link: 'http://krishn.me'},
      {title: 'Hacker News', upvotes: 2, link: 'http://news.ycombinator.com'},
      {title: 'Product Hunt', upvotes: 15, link: 'http://producthunt.com'},
      {title: 'The Verge', upvotes: 9, link: 'http://theverge.com'},
      {title: 'TechCrunch', upvotes: 4, link: 'http://techcrunch.com'}
    ];
    
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };

}]);