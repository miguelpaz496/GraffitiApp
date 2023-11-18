import mapboxgl from "mapbox-gl";
import { useContext, useLayoutEffect, useRef } from "react"
import { MapContext, PlacesContext } from "../context"


export const MapComponent = () => {

    const { isLoading, userLocation} = useContext( PlacesContext );
    const { setMap } = useContext( MapContext );
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!isLoading) {
            const map = new mapboxgl.Map({
                container: mapDiv.current!,
                style: 'mapbox://styles/mapbox/streets-v12', 
                center: userLocation, 
                zoom: 15,
            });
            setMap(map);
        }

    }, [isLoading])

    if(isLoading){ 
        return(
            <div>Cargando...</div>
        );
    }

    return (
        <div ref={mapDiv}
            style={{
                height: "100vh",
                width: "100vw",
                position: "fixed",
                top: 0,
                left: 0
            }}
        >
            { userLocation?.join(",")}
        </div>
    )
}
