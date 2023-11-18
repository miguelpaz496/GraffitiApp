import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"
import { Feature } from "../interfaces/places";
import { LoadingPlaces } from "./";

export const SearchResult = () => {

    const {places, isLoadingPlaces, userLocation} = useContext( PlacesContext );
    const { map, getRouteBetweenPoints } = useContext( MapContext )

    const onPlaceClicked = ( place: Feature ) => {
        const [ lng, lat] = place.center
        map?.flyTo({
            zoom: 18,
            center: {lng, lat}
        })
    }

    const getRoute = ( place: Feature ) => {
        
        if( !userLocation) return

        const [ lng, lat] = place.center

        getRouteBetweenPoints(userLocation, [ lng, lat] )
    }


    if( isLoadingPlaces ){
        return (<LoadingPlaces/>)
    }

    if( places.length === 0 ){
        return <></>
    }

    return (
        <ul className="list-group mt-3">
            
            {
                places.map( place => (
                    <li 
                        key={place.id}
                        className="list-group-item list-group-item-action" 
                        onClick={ () => onPlaceClicked(place)}
                    >
                        <h6> {place.text_es} </h6>
                        <p
                            className="text-muted"
                            style={{
                                fontSize: '12px'
                            }}
                        >
                            { place.place_name }
                        </p>
                        <button  onClick={ () => getRoute(place)}  className="btn btn-outline-primary">
                            direcciones
                        </button>
                    </li>
                ))
            }



        </ul>
    )
}
