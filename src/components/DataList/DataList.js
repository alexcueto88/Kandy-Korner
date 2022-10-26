import { useEffect, useState } from "react"


export const DataList = () => {
    const [locations, findLocations] = useState([])


    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationArray) => {
                findLocations(locationArray)
            })

            
        },
        [] 
    )


    return <>  
    
    <h2>List of locations </h2>      

    <article className="locations">
      {
        locations.map(
          (location) => {
            return <section className="locations" key={`locations--${location.id}`}
            // ***** can we find out what key call does??
            >
              <header>Location Address: {location.address} </header>
                <div> Square Footage: {location.sqFootage} </div>

            </section>
          }
        )
      }
    </article>


  </>    




}