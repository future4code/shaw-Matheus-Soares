import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate()
  
    const goToListTrips = () => {
      navigate("/ListTrips")
    }

    return (
        <div>
            <button onClick={goToListTrips}>Ver viagens</button>
            <button>Adimn</button>
        </div>
    )
}

export default HomePage;