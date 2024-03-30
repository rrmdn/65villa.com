import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from "react";
import L from "leaflet";

const lngOffset = 0.003;

const center: LatLngExpression = [-7.8855452, 112.5335344 + lngOffset];

// mapbox with x token
const mapUrl =
  "https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}{r}?access_token=pk.eyJ1IjoicnJtZG4iLCJhIjoiY2x1ZHF5djF0MTlyZTJqcXU4cGN6bDd0MyJ9.WnyfWJzMI5LDnnPqgFYMkQ";

const nearbyLocations: Array<{
  position: LatLngExpression;
  desc: string;
  isVilla?: boolean;
}> = [
  {
    desc: "65 Villa",
    position: [-7.8929363, 112.5377542 + lngOffset],
    isVilla: true,
  },
  {
    desc: "JTP 1",
    position: [-7.8841663, 112.5236303 + lngOffset],
  },
  {
    desc: "JTP 2",
    position: [-7.8885452, 112.5275344 + lngOffset],
  },
  {
    desc: "JTP 3",
    position: [-7.8971338, 112.5482318 + lngOffset],
  },
  {
    desc: "BNS",
    position: [-7.8965265, 112.5334589 + lngOffset],
  },
  {
    desc: "Museum Angkut",
    position: [-7.878809, 112.5173998 + lngOffset],
  },
  {
    desc: "Alun-alun",
    position: [-7.8725089, 112.523675 + lngOffset],
  },
];

export default function VillaMap() {
  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url={mapUrl} />
      {nearbyLocations.map((location) => (
        <Marker
          position={location.position}
          icon={L.divIcon({
            html: location.desc,
            iconSize: [80, 14],
            className: location.isVilla
              ? "leaflet-villa-icon"
              : "leaflet-nearby-icon",
          })}
        >
          <Popup>{location.desc}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
