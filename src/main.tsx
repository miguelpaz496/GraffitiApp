import React from 'react'
import ReactDOM from 'react-dom/client'
import { GraffitiApp } from './GraffitiApp';
import { Auth0Provider } from "@auth0/auth0-react";
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css'

import mapboxgl from 'mapbox-gl';
 
const access_token: string = import.meta.env.VITE_ACCESS_TOKEN!
mapboxgl.accessToken = access_token;

if( !navigator.geolocation ) {
  alert("tu navegador no tiene opción de Geolocalizacion");
  throw new Error("tu navegador no tiene opción de Geolocalizacion");
}

const domain: string = import.meta.env.VITE_AUTH0_DOMAIN!
const clientId: string = import.meta.env.VITE_AUTH0_CLIENT_ID!

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <GraffitiApp />
    </Auth0Provider>
  </React.StrictMode>,
)
