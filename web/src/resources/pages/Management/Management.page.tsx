import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import { Wrapper } from '../../components';

import {
  Container,
  InteractiveBox,
  InteractiveBoxSearch,
  InteractiveSearch,
  PopMarker
} from './Mangement.styles';
import { MonitorModalTracker } from './components';
import { useManagment } from './useManagment';

export function Management(): JSX.Element {
  const pointStart: LatLngExpression = [-23.5387064, -51.4294313];

  const { handleOpenModalMonitor, openModalMonitor } = useManagment();

  return (
    <Wrapper title='Gerenciar mapa'>
      <Container>
        <MapContainer
          center={{
            lat: pointStart[0],
            lng: pointStart[1]
          }}
          zoom={16}
          style={{ height: '100%', width: '100%', zIndex: '0' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; AquaTrack development'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <InteractiveBox>
            <InteractiveBoxSearch>
              <InteractiveSearch
                placeholder='Buscar por ponto...'
                allowClear
              />
            </InteractiveBoxSearch>
          </InteractiveBox>
          <Marker position={pointStart}>
            <PopMarker>
              <Link
                to='#'
                onClick={() => {
                  handleOpenModalMonitor(true);
                }}
              >
                Acessar tracker
              </Link>
            </PopMarker>
          </Marker>
        </MapContainer>
      </Container>

      <MonitorModalTracker
        open={openModalMonitor}
        handleCloseModal={handleOpenModalMonitor}
      />
    </Wrapper>
  );
}
