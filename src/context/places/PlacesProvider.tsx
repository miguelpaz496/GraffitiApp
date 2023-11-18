import { useEffect, useReducer } from "react"
import { searchApi } from "../../apis"
import { getUserLocation } from "../../helpers"
import { Feature, PlacesResponse } from "../../interfaces/places"
import { PlacesContext } from "./PlacesContext"
import { placesReducer } from "./placesReducer"

export interface PlacesState { 
    isLoading: boolean,
    userLocation?: [ number, number],
    isLoadingPlaces: boolean,
    places: Feature[]
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: [],
}

interface Props {
    children: JSX.Element | JSX.Element[]
}


export const PlacesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
        getUserLocation()
            .then( coords => dispatch({ type: 'setUserLocation', payload: coords}))
    }, []);

    const searchPlacesByTerm = async (query:string): Promise<Feature[]> => {
        if ( query.length === 0 ) {
            dispatch({ type: 'setPlaces', payload:  [] })
            return []; //limpiar state
        } 
        if ( !state.userLocation ) throw new Error('No hay ubicación del usuario');

        dispatch({ type: 'setLoadingPlaces'})

        const res = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        })

        dispatch({ type: 'setPlaces', payload:  res.data.features })
        return res.data.features;
    }
    

    return (
        <PlacesContext.Provider value={{
            ...state,
            searchPlacesByTerm
        }}>
            {children}
        </PlacesContext.Provider>
    )
}
