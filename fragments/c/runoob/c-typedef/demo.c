#include <stdio.h>
#include <string.h>

typedef struct Books
{
    char    title[50];
    char    author[50];
    char    subject[100];
    int     book_id;
}   Book;       // typedef 来为用户自定义的数据类型取一个新的名字

int main() {
    Book book;
    strcpy(book.title, "C tutorial");
    strcpy(book.author, "runoob");
    strcpy(book.subject, "programming language");
    book.book_id = 12345;

    printf("book title: %s\n", book.title);
    printf("book author: %s\n", book.author);
    printf("book category: %s\n", book.subject);
    printf("book id: %d\n", book.book_id);

    return 0;
}

// book title: C tutorial
// book author: runoob
// book category: programming language
// book id: 12345
