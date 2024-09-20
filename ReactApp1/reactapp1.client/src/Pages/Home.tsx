import WeatherForecast from "../Components/WeatherForecast.tsx";
import AuthorizeView from "../Components/AuthorizeView.tsx";

function Home() {
    return (
        <AuthorizeView>
            <WeatherForecast />
        </AuthorizeView>
    );
}

export default Home;