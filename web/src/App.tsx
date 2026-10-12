import { useEffect, useRef } from "react";
import {
  Map,
  NavigationControl,
  setWorkerUrl,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import "./App.css";

setWorkerUrl(workerUrl);

export default function App() {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) {
      return;
    }

    const map = new Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/globe.json",
      center: [0, 20],
      zoom: 1.5,
    });

    map.addControl(new NavigationControl());

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainer} className="globe" />;
}