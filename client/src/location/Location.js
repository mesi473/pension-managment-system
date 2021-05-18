import  React,{ useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export default function Location(){
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 6.994093,
        longitude: 35.593963,
        zoom: 8
      })
    return(
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibWVzaWsiLCJhIjoiY2tuZDZrcW4yMWVodDJvbXJ6a2pjZXltYSJ9.aiM-mOlVHZxF-hTal_Y9OQ"
        onViewportChange={nextViewport => setViewport(nextViewport)}
        ></ReactMapGL>
        )
}