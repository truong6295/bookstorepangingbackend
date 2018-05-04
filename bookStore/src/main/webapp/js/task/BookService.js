
'user strict';
 
angular.module('crudApp').factory('BookService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
            var factory = {
                loadAllBooks: loadAllBooks,
                getAllBooks: getAllBooks,
                getIdBook: getIdBook,
                createBook: createBook,
                updateBook: updateBook,
                removeBook: removeBook,
                getlistCatergory: getlistCatergory,
                getName: getName,
                getAuthor: getAuthor,
                getPrice: getPrice
            };
 
            return factory;
            
            function loadAllBooks(page,pageSize) {
                console.log('Fetching all books');
                var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API+"/getAllBook?"+"page="+page+"&pageSize="+pageSize)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books');
                            $localStorage.books = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading books');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function getAllBooks(){
                return $localStorage.books;
            }
            
            function getIdBook(id) {
                console.log('Fetching task with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API + "/getIdBook/"+id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully task with id :'+id);
                            $localStorage.bk=response.data;      
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading task with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function createBook(book,page,pageSize) {
                console.log('Creating book');
                var deferred = $q.defer();
                $http.post(urls.BOOKSTORE_SERVICE_API+"/saveBook", book)
                    .then(
                        function (response) {
                            loadAllBooks(page,pageSize);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating task : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function updateBook(book, id,page,pageSize) {
                console.log('Updating book with id '+id);
                var deferred = $q.defer();
                $http.put(urls.BOOKSTORE_SERVICE_API+"/updateBook/" + id, book)
                    .then(
                        function (response) {
                            loadAllBooks(page,pageSize);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating task with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function removeBook(id,page,pageSize) {
                console.log('Removing book with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.BOOKSTORE_SERVICE_API+"/deleteBook/"+ id)
                    .then(
                        function (response) {
                            loadAllBooks(page,pageSize);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing task with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getlistCatergory(catergory,page,pageSize){
            	console.log("get list of Category");
            	var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API+"/getCatergory?catergory="+catergory+"&page="+page+"&pageSize="+pageSize)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books of category');
                            $localStorage.bks = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading books of category');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getName(name,page,pageSize){
            	var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API+"/getName?name="+name+"&page="+page+"&pageSize="+pageSize)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books of name');
                            $localStorage.bks = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading books of name');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getAuthor(author,page,pageSize){
            	var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API+"/getAuthor?author="+author+"&page="+page+"&pageSize="+pageSize)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books of author');
                            $localStorage.bks = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading books of author');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getPrice(price,page,pageSize){
            	var deferred = $q.defer();
                $http.get(urls.BOOKSTORE_SERVICE_API+"/getPrice?price="+price+"&page="+page+"&pageSize="+pageSize)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all books of price');
                            $localStorage.bks = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading books of price');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
        }
    ]);