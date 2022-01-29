import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import { Property } from "../types";
import PropertyCard from "../components/PropertyCard";

interface Props {
  property: Property;
}

const PropertyScreen: React.VFC<Props> = ({ property }) => {
  return (
    <Stack spacing={6}>
      <Heading>{property.title}</Heading>
      <PropertyCard key={property.id} property={property} />
    </Stack>
  );
};

export default PropertyScreen;
