import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '@googlemaps/react-wrapper';

const Map = ({ center, zoom, markers, ...props }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center, zoom]);

  useEffect(() => {
    markers?.forEach((markerData) => {
      const newMarker = new window.google.maps.Marker();
      newMarker.setOptions({
        position: markerData,
        map: map,
        title: 'Hello World!'
      });
    });
  }, [map, markers]);

  return <div ref={ref} id="map" {...props} />;
};
Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    })
  )
};

// const GoogleMap = ({ children, showMarker = false, className, ...restProps }) => {

const GoogleMap = ({ showMarker = false, className, ...restProps }) => {
  // const GoogleMap = ({ children, showMarker = false, className, ...restProps }) => {
  const [currentLocation, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
      const pos = { lat, lng };
      setLocation(pos);
    });
  }, []);

  const apiKey = import.meta.env?.VITE_GOOGLE_MAP_ID || '';

  return (
    <Wrapper apiKey={apiKey}>
      <Map
        center={currentLocation}
        zoom={3}
        className={className}
        markers={showMarker ? [currentLocation] : []}
        {...restProps}
      />
    </Wrapper>
  );
};

GoogleMap.propTypes = {
  children: PropTypes.node,
  showMarker: PropTypes.bool,
  className: PropTypes.string
};

export default GoogleMap;
