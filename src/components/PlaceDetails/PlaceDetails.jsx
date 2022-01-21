import React from "react";
import {
  Box,
  Paper,
  Typography,
  Rating,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import { LocationOnOutlined, LocalPhone } from "@mui/icons-material";

const PlaceDetails = ({ place, selected, refProp }) => {
  const { name, rating, address, cuisine, phone, website, photo } = place;

  if (selected)
    refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start" });
  return (
    <>
      {name && (
        <Paper sx={{ my: 1, p: 1 }}>
          <Stack
            spacing={1}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Box minWidth="calc(100% - 140px)" display="flex">
              {photo && (
                <img
                  src={photo?.images?.thumbnail?.url}
                  alt="presentation"
                  width="30px"
                  style={{ borderRadius: "50%", marginRight: "5px" }}
                />
              )}
              <Typography variant="h6" noWrap={true} color="primary.dark">
                <a
                  href={website}
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {name}
                </a>
              </Typography>
            </Box>
            {rating && (
              <Box display="flex" justifyContent="flex-end">
                <Rating name="read-only" value={Number(rating)} readOnly />
              </Box>
            )}
          </Stack>
          {cuisine && (
            <Box display="flex" spacing={1} sx={{ my: 1, flexWrap: "wrap" }}>
              {cuisine?.map((cuisin, idx) => {
                return (
                  <Chip
                    key={idx}
                    label={cuisin.name}
                    size="small"
                    variant="outlined"
                    sx={{ margin: "2px" }}
                  />
                );
              })}
            </Box>
          )}

          {address && (
            <Box display="flex" alignItems="center">
              <LocationOnOutlined fontSize="small" />
              <Typography variant="subtitle1">{address}</Typography>
            </Box>
          )}
          {phone && (
            <Box display="flex" alignItems="center">
              <LocalPhone fontSize="small" />
              <Typography variant="subtitle1">
                <a
                  href={`tel:${phone}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {phone}
                </a>
              </Typography>
            </Box>
          )}
        </Paper>
      )}
    </>
  );
};

export default PlaceDetails;
