import { useState, useEffect } from "react";
import { HttpGet } from "./core/httpHelper";
import { Card } from "./core/Card";

export const Home = () => {
  const [characterList, setCharacterList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [Load, setLoad] = useState(null);

  useEffect(() => {
    setLoad('s');
    const getCharacters = async () => {
      try {
        let charList = await HttpGet();
        setCharacterList(charList);
        setSearchList(charList);
      } catch (error) {
        console.error(error);
      }
      setLoad(null);
    }
    getCharacters();
    
  }, [])

  const filterCharacters = (e) => {
        
    let searchQuery = e?.target?.value.toLowerCase()
    if(searchQuery) {
      const filteredCharacters = characterList.filter((character) => {
        return (
          character.name.toLowerCase().includes(searchQuery) ||
          character.house.toLowerCase().includes(searchQuery) ||
          character.actor.toLowerCase().includes(searchQuery)
        );
      });
      setSearchList(filteredCharacters);
    } else {
      setSearchList(characterList);
    }
    
  }

  const Characters = () => {
    
    return (
      !!searchList.length && searchList.map((character, index) => {
        return (
          <Card key={index} character={character} />
        )
      })
    )
  }

  return (
    <>
      <div className="row m-0 m-5 justify-content-lg-center">
        <div className="col col-10 text-center">
          <h3>Harry Potter Characters</h3>
        </div>
        <div className="col col-10 mt-4">
          <div className="input-group mb-3">
            <input onChange={filterCharacters} type="text" className="form-control" placeholder="Search for a character" aria-label="Search for a character" aria-describedby="img-search" autoFocus />
            <div className="input-group-prepend">
              <span className="input-group-text rounded-0 rounded-end"><img src="https://www.svgrepo.com/show/522443/search.svg" alt="" id="search"></img></span>
            </div>
          </div>
        </div>
        
        <div className="col col-10">
          {
            Load && 
            <div className="text-center m-5 p-5">
              <div className="spinner-grow text-info my-2 me-3 p-2" role="status"></div>
              <div className="spinner-border text-info p-4" role="status"></div>
              <div className="spinner-grow text-info my-2 ms-3 p-2" role="status"></div>
            </div>
          }
          <div className="input-group mb-3 charList">
            <Characters />
            { !searchList.length &&
              <h2 className="my-5 py-5 text-center text-danger">Results not found</h2>
            }
            
          </div>
        </div>
      </div>
    </>
  )
}