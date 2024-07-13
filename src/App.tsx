import "./App.css";
import EventList from "./components/EventList";

function App() {

    return (
        <>
            <div>
                <h1>Bienvenue !</h1>
                L'URL fetchée : {process.env.BACKEND_API_URL}
                {/* <TestComponent /> */}
                <EventList></EventList>
            </div>
        </>
    );
}



export default App;
