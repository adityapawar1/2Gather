import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import events from './events.json';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD-C-hCZNzCP5BgtKrOgzP3HrFm0q97Eo8",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const id = 4;
  const center = useMemo(() => ({ lat: parseInt(events.events[id].location['lat']), lng: parseInt(events.events[id].location['lng']) }), []);

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map">
      <Marker position={center} />
    </GoogleMap>
  );
}