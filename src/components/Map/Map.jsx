import React, { useState } from "react";
import { useMediaQuery, Box, Paper, Typography, Rating } from "@mui/material";

import GoogleMapReact from "google-map-react";
import { LocationOnOutlined } from "@mui/icons-material";

import mapStyles from "./styles";

const Map = ({
  coordinates,
  setBounds,
  setCoordinates,
  places,
  setChildClicked,
}) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      style={{ height: "100%", width: "100%", position: "relative" }}
      className="mapContainer"
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
        }}
        defaultCenter={
          coordinates || { lat: 44.432770250000004, lng: 26.041227161047665 }
        }
        center={
          coordinates || { lat: 44.432770250000004, lng: 26.041227161047665 }
        }
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          console.log(child);
          setChildClicked(child);
        }}
      >
        {places?.map((place, idx) => (
          <div
            className="placeOnMap"
            lat={Number(place?.latitude)}
            lng={Number(place?.longitude)}
            key={idx}
            style={{
              zIndex: 1,
              position: "absolute",
              transform: "translate(-50%, -50%)",
            }}
          >
            {isMobile ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              place.name && (
                <Paper sx={{ p: 1, cursor: "pointer" }}>
                  <Box>
                    <Typography variant="subtitle2">{place?.name}</Typography>
                    <Rating value={Number(place?.rating)} readOnly></Rating>
                  </Box>
                </Paper>
              )
            )}
          </div>
        ))}
      </GoogleMapReact>
    </Box>
  );
};

export default Map;
