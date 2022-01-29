import React from "react";
import { Stack, Text, Image } from "@chakra-ui/react";

import { parseCurrency } from "../../utils/currency";
import { Property } from "../types";

interface Props {
  property: Property;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <>
      <Stack
        key={property.id}
        alignItems="center"
        borderColor="gray.100"
        borderRadius="md"
        borderWidth={1}
        data-testid="property"
        direction="row"
        justifyContent="space-between"
        spacing={3}
      >
        <Stack direction="row" padding={2} spacing={4} width="100%">
          <Image
            alt={property.title}
            backgroundColor="white"
            borderRadius="md"
            height={{ base: 24, sm: 36 }}
            loading="lazy"
            minWidth={{ base: 24, sm: 36 }}
            objectFit="contain"
            src={property.images[0]}
            width={{ base: 24, sm: 36 }}
          />
          <Stack justifyContent="space-between" spacing={1} width="100%">
            <Stack spacing={1}>
              <Text fontWeight="500">{property.title}</Text>
              <Text color="gray.500" fontSize="sm">
                {property.description}
              </Text>
            </Stack>

            <Text color="green.500" fontSize="sm" fontWeight="500">
              {parseCurrency(property.price)}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PropertyCard;
