import mapboxgl from 'mapbox-gl'
import { useRef, useState, useEffect } from 'react'
import { PlusIcon as PlusIconSolid, MinusIcon as MinusIconSolid } from '@heroicons/react/solid'


function Map(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.4);
    const [lat, setLat] = useState(47.67);
    const [zoom, setZoom] = useState(0);

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(2));
            setLat(map.current.getCenter().lat.toFixed(2));
            setZoom(Number(map.current.getZoom().toFixed(2)));
        });
    });

    return (
        <div className={'relative'}>

            {/*Latitude/Longitude display*/}
            {/*<div className={"bg-cyan-800 text-white px-4 py-2 z-10 absolute bottom-0 right-0 m-4 rounded text-xs"}>*/}
            {/*    Lat: {lat} | Lon: {lng}*/}
            {/*</div>*/}

            {/*Zoom buttons*/}
            <div className={"px-1 py-1 z-10 absolute bottom-0 right-0 m-4 rounded text-xs"}>
                <button
                    type="button"
                    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mr-2"
                    onClick={() => {
                        map.current.setZoom(zoom + 1)
                        setZoom(zoom + 1 > 20 ? 20: zoom + 1)
                    }}
                >
                    <PlusIconSolid className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    onClick={() => {
                        map.current.setZoom(zoom - 1)
                        setZoom(zoom - 1 < 0 ? 0: zoom - 1)
                    }}
                >
                     <MinusIconSolid className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>

            {/*Map*/}
            <div ref={mapContainer} className={"h-80"}/>

        </div>
    );
}

export default Map