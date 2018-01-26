import React from 'react';
import { StaticGoogleMap, Marker } from 'react-static-google-map';

import './index.css';
import ImageWithLoadState from '../ImageWithLoadState';

const MAPS_API_KEY = 'AIzaSyDrOfx4R7j4oNFtVPMR2r8tjsTfKWLnTRA';

const Map = ({ location }) => (
  <StaticGoogleMap
    as={ImageWithLoadState}
    className="map-img"
    apiKey={MAPS_API_KEY}
    size="450x250"
    zoom={15}>
    <Marker location={location} />
  </StaticGoogleMap >
);

export default Map;
