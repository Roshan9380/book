import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
   
    fetch('http://localhost:1234/api/getAll')
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data);
      })
      .catch((error) => {
        console.error('Error fetching authors:', error);
      });
  }, []);

  const handleAuthorChange = (author) => {

    if (selectedAuthors.includes(author)) {
      setSelectedAuthors(selectedAuthors.filter((a) => a !== author));
    } else {
      setSelectedAuthors([...selectedAuthors, author]);
    }
  };

  const handleSearch = () => {
    if(selectedAuthors.length===0) {
      alert("Please select at least one author");
      }
      else {
        navigate(`/detail/${selectedAuthors.join(',')}`);
      }
    
  };

  return (
    <div >
      <h2>Home Page</h2>
      <br></br>
      <div>
        {authors.map((author) => (
          <label key={author} >
            <input style={{marginLeft:"15px"}}
              type="checkbox"
              value={author}
              onChange={() => handleAuthorChange(author)}
              checked={selectedAuthors.includes(author)}
            />
            {author}
            
          </label>
        ))}
      </div>
      <br></br>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default HomePage;
