import React from "react";
import {天干} from "@/qimen/type";

// We keep the Props interface active so the parent component (Cell.tsx) doesn't break
interface Props {
    panSize: number;
    g1: 天干;
    g2: 天干;
}

// We remove the props inside () so TypeScript doesn't complain about unused variables
export const Pattern = React.memo<Props>(() => {
    return null; 
});

/* =========================================================
   OLD CODE KEPT FOR FUTURE REFERENCE
   To restore this, delete the top part and uncomment everything below!
   =========================================================
import React from "react";
import {Flex, Tooltip} from "@chakra-ui/react";
import {天干} from "@/qimen/type";
import {BehaviorType, QmPatternUtil} from "@/util/QmPatternUil";

interface Props {
    panSize: number;
    g1: 天干;
    g2: 天干;
}

export const Pattern = React.memo<Props>(({panSize, g1, g2}) => {
   
    const [patternName, type, description] = QmPatternUtil.pattern(g1, g2);

    return (
        <Flex cursor="pointer" justifyContent="center" fontSize={`${panSize / 36}px`} mx={`${panSize / 600}px`} w={`${panSize / 36}px`} color={color(type)}>
            <Tooltip hasArrow label={description}>
                {patternName}
            </Tooltip>
        </Flex>
    );
});

const color = (type: BehaviorType) => {
    switch (type) {
        case "吉":
            return "red.500";
        case "凶":
            return "green.500";
        default:
            return "gray.500";
    }
};
========================================================= */
