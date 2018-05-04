'use strict';

angular.module('crudApp').controller('BookController',['BookService','$scope','$localStorage',
	function(BookService, $scope,$localStorage) {
		$scope.currentPage = 0;
		$scope.pageSize = 1;
		$scope.seach = '';
		$scope.all = false;
		$scope.check1 = '';
		$scope.numberOfPages = function() {
			return getData().page;
		};
		$scope.selectPanging=function(){
			switch($scope.check1){
			case 'check1':
				if($scope.seach != null && $scope.seach!='' && /^\d+$/.test($scope.seach)&& $scope.all==true){
					$localStorage.bk={};
					$scope.currentPage = 0;
					$localStorage.bks={};
					BookService.getIdBook($scope.seach);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check2':
				if($scope.seach != null && $scope.seach!=''&& $scope.all==true){
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.getAuthor($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check3':
				if($scope.seach != null && $scope.seach!=''&& $scope.all==true){
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.getlistCatergory($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check4':
				if($scope.seach != null && $scope.seach!=''&& $scope.all==true){
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.getName($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check5':
				if($scope.seach != null && $scope.seach!=''&& $scope.all==true){
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.getPrice($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
				break;
			default:
				$localStorage.bk={};
				$localStorage.bks={};
				$scope.currentPage = 0;
				BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				break;
			}	
		}
		$scope.nextPanging=function checks(){
			switch($scope.check1){
			case 'check1':
				if($scope.seach != null && $scope.seach!='' && /^\d+$/.test($scope.seach)&& $scope.all==true){
					$localStorage.bk={};
					$localStorage.bks={};
					BookService.getIdBook($scope.seach);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check2':
				if($scope.seach != null && $scope.seach!=''&& $scope.all==true){
					$localStorage.bk={};
					$localStorage.bks={};
					BookService.getAuthor($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check3':
				if($scope.seach != null && $scope.seach!=''&& $scope.all==true){
					$localStorage.bk={};
					$localStorage.bks={};
					BookService.getlistCatergory($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check4':
				if($scope.seach != null && $scope.seach!=''&& $scope.all==true){
					$localStorage.bk={};
					$localStorage.bks={};
					BookService.getName($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check5':
				if($scope.seach != null && $scope.seach!=''&& $scope.all==true){
					$localStorage.bk={};
					$localStorage.bks={};
					BookService.getPrice($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
				break;
			default:
				$localStorage.bk={};
			$localStorage.bks={};
				BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				break;
			}	
		};
		
		$scope.eventsearch=function(){
			switch($scope.check1){
			case 'check1':
				if($scope.seach != null && $scope.seach!='' && /^\d+$/.test($scope.seach)){
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.getIdBook($scope.seach);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check2':
				if($scope.seach != null && $scope.seach!=''){
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.getAuthor($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check3':
				if($scope.seach != null && $scope.seach!=''){
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.getlistCatergory($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check4':
				if($scope.seach != null && $scope.seach!=''){
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.getName($scope.seach,$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			case 'check5':
				if($scope.seach != null && $scope.seach!=''&& /^\d+([.]\d+)?$/.test($scope.seach)){
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.getPrice(($scope.seach),$scope.currentPage,$scope.pageSize);
				}else{
					$localStorage.bk={};
					$localStorage.bks={};
					$scope.currentPage = 0;
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				}
					break;
			default:
				$localStorage.bk={};
				$localStorage.bks={};
				$scope.currentPage = 0;
				BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
				break;
			}	
		};
		 function getData() {
			 
			var arr = {};
			if ($scope.seach == '' || $scope.seach == null|| $scope.all == false) {
				arr = getAllBooks();
			} else if ($scope.check1 == 'check1') {
				if(Object.keys($localStorage.bk).length==0){
					arr.page=0;
					arr.listPage=[];
					arr.listPage=null;
				}
				else{
					arr.page=1;
					arr.listPage=[];	
					arr.listPage.push($localStorage.bk);
					}
			} else
				arr=$localStorage.bks;
			return arr;
		};
		$scope.orderByMe = function(x) {
			$scope.myOrderBy = x;
		};

		var self = this;
		self.getData=getData;
		self.book = {};
		self.books = [];
		self.submit = submit;
		self.editBook = editBook;
		self.reset = reset;
		self.getAllBooks = getAllBooks,
		self.createBook = createBook,
		self.updateBook = updateBook,
		self.removeBook = removeBook,
		self.successMessage = '';
		self.errorMessage = '';
		self.done = false;
		self.onlyIntegers = /^\d+$/;
		self.onlyNumbers = /^\d+([,.]\d+)?$/;
		
		
		function submit() {
			console.log('Submitting');
				if (self.book.idbook === undefined || self.book.idbook === null) {
					console.log('Saving New book', self.book);
					createBook(self.book);
				} else {
					updateBook(self.book,self.book.idbook);
					console.log('book updated with id ',self.book.idbook);
				}
		}

		function createBook(book) {
			console.log('About to create book');
			BookService.createBook(book,$scope.currentPage,$scope.pageSize).then(function(response) {
				console.log('book created successfully');
				self.successMessage = 'book created successfully';
				self.errorMessage = '';
				self.done = true;
				self.book = {};
				$scope.myForm
				.$setPristine();
				switch($scope.check1){
				case 'check1':
					if($scope.seach != null && $scope.seach!='' && /^\d+$/.test($scope.seach)){
						
						BookService.getIdBook($scope.seach);
					}
						break;
				case 'check2':
					if($scope.seach != null && $scope.seach!=''){
						BookService.getAuthor($scope.seach,$scope.currentPage,$scope.pageSize);
					}
						break;
				case 'check3':
					if($scope.seach != null && $scope.seach!=''){
						BookService.getlistCatergory($scope.seach,$scope.currentPage,$scope.pageSize);
					}
						break;
				case 'check4':
					if($scope.seach != null && $scope.seach!=''){
						BookService.getName($scope.seach,$scope.currentPage,$scope.pageSize);
					}else
						break;
				case 'check5':
					if($scope.seach != null && $scope.seach!=''&& /^\d+([.]\d+)?$/.test($scope.seach)){
						BookService.getPrice(($scope.seach),$scope.currentPage,$scope.pageSize);
					}
						break;
				default:
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
					break;
				}
		},function(errResponse) {
			console.error('Error while creating User');
			self.errorMessage = 'Error while creating User: '+ errResponse.data.errorMessage;
			self.successMessage = '';});
			
		}

		function updateBook(book, id) {
			console.log('About to update book');
			BookService.updateBook(book, id,$scope.currentPage,$scope.pageSize).then(function(response) {
				console.log('book updated successfully');
				self.successMessage = 'book updated successfully';
				self.errorMessage = '';
				self.done = true;
				$scope.myForm.$setPristine();
				self.book = {};
				switch($scope.check1){
				case 'check1':
					if($scope.seach != null && $scope.seach!='' && /^\d+$/.test($scope.seach)){
						
						BookService.getIdBook($scope.seach);
					}
						break;
				case 'check2':
					if($scope.seach != null && $scope.seach!=''){
						BookService.getAuthor($scope.seach,$scope.currentPage,$scope.pageSize);
					}
						break;
				case 'check3':
					if($scope.seach != null && $scope.seach!=''){
						BookService.getlistCatergory($scope.seach,$scope.currentPage,$scope.pageSize);
					}
						break;
				case 'check4':
					if($scope.seach != null && $scope.seach!=''){
						BookService.getName($scope.seach,$scope.currentPage,$scope.pageSize);
					}else
						break;
				case 'check5':
					if($scope.seach != null && $scope.seach!=''&& /^\d+([.]\d+)?$/.test($scope.seach)){
						BookService.getPrice(($scope.seach),$scope.currentPage,$scope.pageSize);
					}
						break;
				default:
					BookService.loadAllBooks($scope.currentPage,$scope.pageSize);
					break;
				}
			},function(errResponse) {
				console.error('Error while updating book');
				self.errorMessage = 'Error while updating book '+ errResponse.data;
				self.successMessage = '';});
		}

		function removeBook(id) {
			console.log('About to remove book with id '+ id);
			BookService.removeBook(id,$scope.currentPage,$scope.pageSize).then(function() {
					console.log('book '+ id+ ' removed successfully');
				},function(errResponse) {
					console.error('Error while removing book '+ id+ ', Error :'+ errResponse.data);
				});
		}

		function getAllBooks() {
			return BookService.getAllBooks($scope.currentPage,$scope.pageSize);
		}

		function editBook(id) {
			self.successMessage = '';
			self.errorMessage = '';
			BookService.getIdBook(id).then(
				function(book) {
					self.book = book;
					
				},
				function(errResponse) {
					console.error('Error while removing book '+ id+ ', Error :'+ errResponse.data);
				});
		}
		
		function reset() {
			self.successMessage = '';
			self.errorMessage = '';
			self.book = {};
			$scope.myForm.$setPristine(); //reset Form
		}
}]);
angular.module('crudApp').filter('startFrom', function() {
	return function(input, start) {
		start = +parseInt(start); //parse to int
		return input.slice(start);
	}
});