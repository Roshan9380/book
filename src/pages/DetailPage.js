import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function DetailPage() {
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const navigate = useNavigate();


  const { authors } = useParams();
  // const authorList = authors ? authors.split(',') : [];

  useEffect(() => {
    if (authors) {
      fetch(`http://localhost:1234/api/search?authors=${authors}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Fetched data:', data);
          setBooks(data);
        })
        .catch((error) => console.error('Error fetching books:', error));
    }
  }, [authors]);


  const handleBookSelect = (id) => {
    if (selectedBooks.includes(id)) {
      setSelectedBooks(selectedBooks.filter((bookId) => bookId !== id));
    } else {
      setSelectedBooks([...selectedBooks, id]);
    }
  };

  const handleOrder = () => {
    if(selectedBooks.length===0) {
      alert("Please select at least one book");
    }
    else {
    const selectedBookIds = selectedBooks.join(',');
    navigate(`/successpage/${selectedBookIds}`);
    }
  

  };

  return (
    <div>
      <h2>Detail Page</h2>
      <Table stripped bordered hover size="sm" style = {{width:"700px"}} >
        <thead>
          <tr>
            <th>Select</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>

          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleBookSelect(book.id)}
                  checked={selectedBooks.includes(book.id)}
                />
              </td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>


            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleOrder} className="btn btn-primary">Order</Button>
    </div>
  );
}

export default DetailPage;
