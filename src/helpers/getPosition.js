
export const getPosition = (setPosition) => {

    const success =(pos)=>setPosition({lat: pos.coords.latitude,lon: pos.coords.longitude});
    navigator.geolocation.getCurrentPosition(success);
}


