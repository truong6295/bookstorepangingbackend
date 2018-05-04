package ifisolution.com.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import ifisolution.com.model.Book;

@Repository
public interface BookDAO {
	List<Book> getAllBook(int page, int pageSize, String sortedColumn,
			Boolean desc);
	boolean saveBook(Book obj);
	boolean updateBook(Book obj);
	boolean deleteBook(int idBook);
	long countBookByAuthor(String author);
	long countBook();
	long countBookByCatergory(String catergory);
	long countBookByName(String name);
	long countBookByPrice(float price);
	List<Book> getlistCatergory(String catergory,int page, int pageSize, String sortedColumn,
			Boolean desc);
	Book getIdBook(int idBook);
	List<Book> getListName(String name,int page, int pageSize, String sortedColumn,
			Boolean desc);
	List<Book> getListAuthor(String author,int page, int pageSize, String sortedColumn,
			Boolean desc);
	List<Book> getListPrice(float price,int page, int pageSize, String sortedColumn,
			Boolean desc);
}
