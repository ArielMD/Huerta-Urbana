import React, { useEffect } from "react";
import L from "leaflet";
import mark from "../images/marcador.png";
const Map = () => {
  const location = [17.9876744, -92.936939];

  useEffect(() => {
    if (window !== "undefined") {
      var map = L.map("map").setView(location, 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // L.marker(location).addTo(map).bindPopup("Huerta Urbana").openPopup();
      const iconMark = L.icon({
        iconUrl: mark,
        iconSize: [30, 30],
        popupAnchor: [0, 0],
      });
      L.marker(location, { icon: iconMark }).addTo(map);
    } else {
      return null;
    }
  });

  return <div id="map" style={{ height: "100%", width: "100%" }}></div>;
};

export default Map;
