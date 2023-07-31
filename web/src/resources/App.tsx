import { RouterBrowser } from '../app/routes/RouterBrowser';
import 'leaflet/dist/leaflet.css';
import '../shared/styles/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DataProvider from 'app/context/DataProvider/DataProvider';

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        staleTime: 1000 * 60 * 5
      }
    }
  });

  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <ReactQueryDevtools
            initialIsOpen={false}
            position='bottom-right'
          />
          <RouterBrowser />
        </DataProvider>
      </QueryClientProvider>
    </div>
  );
}
