import { BtnMyLocation, MapComponent, SearchBar } from "../components"
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../components/LogoutButton"


export const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return(
        <div>
            <MapComponent/>
            <BtnMyLocation/>
            {isAuthenticated && 
                <div             style={{
                    position: "fixed",
                    top: "20px",
                    right: "20px",
                }}>
                    <LogoutButton/>
                    <img src={user!.picture} alt={user!.name} />
                    <h2>{user!.name}</h2>
                    <p>{user!.email}</p>
                </div>
            }
            <SearchBar/>
        </div>
    )    
}
