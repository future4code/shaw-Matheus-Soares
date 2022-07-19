import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate()

    const goToListTrips = () => {
        navigate("/trips/list")
    }
    const goToLogin =() => {
        navigate("/login")
    }

    return (
        <div>
            <h1>LabeX</h1>
            <div>
                <button onClick={goToListTrips}>Ver viagens</button>
                <button onClick={goToLogin}>Login</button>
            </div>
        </div>
    )
}

export default HomePage;