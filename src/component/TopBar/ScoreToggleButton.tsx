import React from "react";

// We keep the Props interface active so the parent component doesn't break
interface Props {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

// We remove the {enabled, setEnabled} destructuring so TypeScript doesn't complain
export const ScoreToggleButton = React.memo<Props>(() => {
    return null; 
});

/* =========================================================
   OLD CODE KEPT FOR FUTURE REFERENCE
   To restore this, delete the top part and uncomment everything below!
   =========================================================
import React from "react";
import {StarIcon} from "@chakra-ui/icons";
import {Button, Text, useBreakpointValue} from "@chakra-ui/react";

interface Props {
    enabled: boolean;
    setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ScoreToggleButton = React.memo<Props>(({enabled, setEnabled}) => {
    const smallButtonSize = useBreakpointValue({base: "sm", md: "md"});
    const iconSize = useBreakpointValue({base: "lg", md: "2xl"});

    return (
        <Button
            bgColor={enabled ? "blue.500" : "gray.100"}
            color={enabled ? "yellow.400" : "gray.700"}
            _focus={{}}
            _hover={{}}
            _active={{transform: "scale(0.9)"}}
            size={smallButtonSize}
            aria-label="current"
            onClick={() => setEnabled(_ => !_)}
            mx={{base: 0.5, md: 1}}
        >
            <StarIcon fontSize={iconSize} />
            <Text ml={1}>計分模式</Text>
        </Button>
    );
});
========================================================= */
