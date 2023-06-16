import { PageBooks } from "./style";


const BookList = () => {

    const books = [
        {
            title: 'A Princesinha',
            author: 'Frances Hodgson Burnet',
        },
        {
            title: 'O Jardim Secreto',
            author: 'Frances Hodgson Burnet',
        },

    ];
    return (
        <PageBooks>
            <div>
                <h1>Book List</h1>
                <ul>
                    {books.map((books, index) => (
                        <li key={index}>
                            <h3>{books.title}</h3>
                            <p>By {books.author}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </PageBooks>
    );
};

export default BookList;
