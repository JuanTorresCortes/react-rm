// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';

function App() {
  const [data, setData] = useState([]); // State to store the fetched data
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const totalPages = 42; // Set the total number of pages here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${currentPage}`
        );
        const { results } = await response.json(); // Extract the results from the response
        setData(results); // Update the data state with fetched results
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data when the component mounts or the currentPage changes
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage < 1) {
        alert('You are already on the first page.');
        return 1;
      }
      return newPage;
    });
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + 1;
      if (newPage > totalPages) {
        alert('You are already on the last page.');
        return totalPages;
      }
      return newPage;
    });
  };

  return (
    <div className="App">
      <h1>React API app</h1>
      <div className="button-div">
        <button onClick={handlePrevious} disabled={currentPage === 1} style={{backgroundColor: "green", margin: "1em"}}>
          Previous
        </button>
        <br />
        <button onClick={handleNext} disabled={currentPage === totalPages} style={{backgroundColor: "green", margin: "1em"}}>
          Next
        </button>
      </div>
      

      <div className="picContainer">
        {data.map((character) => (
          <ImageCard
            key={character.id}
            character={character} // Pass each character as a prop to ImageCard component
          />
        ))}
      </div>
    </div>
  );
}

export default App;
