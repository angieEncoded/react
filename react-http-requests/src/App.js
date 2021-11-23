import React, { useState, useEffect, useCallback } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

// I used a local api I didn't want exposed in github so I threw it in this 
const URL = process.env.REACT_APP_URL;

function App() {

  const [pets, setPets] = useState([]);
  const [waitingOnPets, setWaitingOnPets] = useState();
  const [errorState, setErrorState] = useState();

  // Grab the pets with the button
  // useCallback will prevent recreation of a function - its an optimization technique
  const fetchPets = useCallback(async () => {
    setWaitingOnPets(true);
    setErrorState(null);
    try {
      const results = await fetch(URL);

      // Check if the response was okay
      if (!results.ok) {
        throw new Error(results.message)
      }
      const data = await results.json();

      // Transform the data to be used by this app
      // these next two are synchronous tasks
      const transformedPets = data.data.map(item => {
        return {
          id: item.petid,
          title: item.petname,
          openingText: item.license_type,
          releaseDate: item.expires
        }
      })
      setPets(transformedPets)
    } catch (error) {
      // console.log(error.message)
      if (error.message.includes("Unexpected token")) {
        setErrorState("There was a problem parsing a JSON result")
      } else {
        setErrorState(error.message)
      }
    }
    setWaitingOnPets(false);
  }, [])

  // Call the function one time when the page loads (empty array means only on first render)
  useEffect(() => {
    fetchPets()
  }, [fetchPets])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchPets}>Fetch Pets</button>
      </section>
      <section>
        {/* Now we just render this instead of the below inline code */}
        {/* {content} */}

        {/* Show a loading spinner or text while loading */}
        {!waitingOnPets && pets.length > 0 && <MoviesList movies={pets} />}

        {/* Check whether there are no pets */}
        {!waitingOnPets && pets.length === 0 && !errorState && <p> Found no Pets</p>}

        {/* Show the loading spinner */}
        {waitingOnPets && <p>Loading</p>}

        {/* Show some error state */}
        {!waitingOnPets && errorState && <p>{errorState}</p>}
      </section>
    </React.Fragment >
  );
}

export default App;

// Alternative syntax stuff


  // Alternatively we could set a variable here and replace all the conditional checks below with if checks
  // Found nothing default
  // let content = <p> Found no Pets</p>;

  // Found some pets
  // if (pets.length > 0) {
  //   content = <MoviesList movies={pets} />
  // }
  // We're in error
  // if (errorState) {
  //   content = <p>{errorState}</p>;
  // }

  // We're still loading
  // if (waitingOnPets) {
  //   content = <p>Loading</p>
  // }
