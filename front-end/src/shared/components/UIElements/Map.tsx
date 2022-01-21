import React, { CSSProperties, useEffect } from "react";

import { Loader } from "@googlemaps/js-api-loader";
import "./Map.css";

interface MapProps {
  className?: string;
  style?: CSSProperties;
  center: { lat: number; lng: number };
  zoom: number;
}

const Map: React.FC<MapProps> = (props) => {
  const { center, zoom } = props;
  useEffect(() => {
    const key: string = process.env.REACT_APP_GOOGLE_MAPS_API_KEY!;
    const loader = new Loader({
      apiKey: key,
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: center,
          zoom: zoom,
        }
      );

      // put icon on map of given center location
      new google.maps.Marker({ position: center, map: map });
    });
  }, [center, zoom]);

  return (
    <div
      id="map"
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
