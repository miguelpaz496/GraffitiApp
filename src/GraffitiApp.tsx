import App from "./App"
import { MapProvider, PlacesProvider } from "./context"


export const GraffitiApp = () => {
    return(
        <PlacesProvider>
            <MapProvider>
                <App/>
            </MapProvider>
        </PlacesProvider>   
    )

}