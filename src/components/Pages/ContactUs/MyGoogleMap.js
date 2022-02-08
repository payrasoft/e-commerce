// import React from "react";

// const GoogleMap = () => {
//   return <div></div>;
// };

// export default GoogleMap;

import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.810331,
  lng: 90.412521,
};

function MyGoogleMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAaMBh0NUjvQ-Sq6xr-bGSAQ0W8_qV7IkM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyGoogleMap);
