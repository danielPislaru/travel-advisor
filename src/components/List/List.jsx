import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Divider,
  InputLabel,
  Typography,
  FormControl,
  Select,
  Box,
  MenuItem,
  Stack,
} from "@mui/material";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <Box sx={{ p: 1, height: "100%" }}>
      <Typography variant="h6">
        Restaurant, Hotels & Attractions around
      </Typography>
      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress size="5rem" sx={{ margin: "20px auto" }} />
        </Box>
      ) : (
        <>
          <Stack
            sx={{ my: 2 }}
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <FormControl variant="standard">
              <InputLabel id="">Type</InputLabel>
              <Select
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{ minWidth: "100px" }}
              >
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard">
              <InputLabel id="">Rating</InputLabel>
              <Select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                style={{ minWidth: "100px" }}
              >
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3</MenuItem>
                <MenuItem value={4}>Above 4</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Box
            container
            spacing={2}
            sx={{
              overflow: "hidden",
              overflowY: "auto",
              maxHeight: "calc(100% - 120px)",
            }}
          >
            {places?.map((place, i) => {
              return (
                <Box key={i} ref={elRefs[i]}>
                  <PlaceDetails
                    place={place}
                    refProp={elRefs[i]}
                    selected={Number(childClicked) === i}
                  />
                </Box>
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default List;
