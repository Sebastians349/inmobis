import React from "react";
import { Stack, Grid, Text } from "@chakra-ui/react";
import { Property } from "../types";
import PropertyCard from "../components/PropertyCard";

interface Props {
  properties: Property[];
}

const PropertiesScreen: React.VFC<Props> = ({ properties }) => {
  return (
    <Stack spacing={6}>
      {properties.length ? (
        <Grid
          gridGap={8}
          templateColumns={{
            base: "repeat(auto-fill, minmax(240px, 1fr))",
            sm: "repeat(auto-fill, minmax(360px, 1fr))",
          }}
        >
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </Grid>
      ) : (
        <Text color="gray.500" fontSize="lg" margin="auto">
          No hay productos
        </Text>
      )}
    </Stack>
  );
};

export default PropertiesScreen;
