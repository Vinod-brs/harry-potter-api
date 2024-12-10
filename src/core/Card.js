export const Card = (props) => {

    const { character } = props;
  
    return (
      <>
        <div className="row w-100 m-0 mb-2 character">
          <div className="col col-lg-9">
            <h4 className="my-2">{character?.name}</h4>
            <p className="my-2">House: {character?.house}</p>
            <p className="my-2">Actor: {character?.actor}</p>
            <p className="my-2">Ancestory: {character?.ancestry}</p>
            <p className="my-2">Date of Birth: {character?.dateOfBirth}</p>
          </div>
          <div className="col col-lg-3 mt-2 text-center">
            <img src={character?.image} alt={character?.name}/>
          </div>
        </div>
      </>
    )
  }