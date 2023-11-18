import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"


export const BtnMyLocation = () => {

    const {map, isMapReady} = useContext(MapContext);
    const { userLocation } = useContext(PlacesContext)

    const onClick = () => {

        if(!isMapReady) throw new Error("Mapa no esta listo");
        if(!userLocation) throw new Error("Mapa no esta listo");
        
        map?.flyTo({
            zoom: 15,
            center: userLocation
        })
    }

    return(
        <button
            onClick={onClick}
            style={{
                position: "fixed",
                top: "20px",
                right: "20px",
            }}
        >
            Localizacion
        </button>
    )
}