import DataProvider from "../app/context/DataProvider";
import { RouterBrowser } from "../app/routes/RouterBrowser";
import 'leaflet/dist/leaflet.css';
import '../app/shared/styles/index.css';

export function App() {
  return (
    <div className="App">
      <DataProvider>
				<RouterBrowser /> 
			</DataProvider>
    </div>
  )
}

