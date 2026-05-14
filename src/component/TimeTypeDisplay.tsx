import React from "react";
import {八字} from "@/qimen/type"; // Only keeping what the interface needs

// We keep the Props interface active so the parent component doesn't break
interface Props {
    bazi: 八字;
}

// We remove the {bazi} destructuring so TypeScript doesn't complain it's unused
export const TimeTypeDisplay = React.memo<Props>(() => {
    return null; 
});

/* =========================================================
   OLD CODE KEPT FOR FUTURE REFERENCE
   To restore this, delete the top part and uncomment everything below!
   =========================================================
import React from "react";
import {Flex} from "@chakra-ui/react";
import {AstrologicalTimeUtil, TimeType} from "@/qimen/AstrologicalTimeUtil";
import {八字, 地支, 天干} from "@/qimen/type";

interface Props {
    bazi: 八字;
}

export const TimeTypeDisplay = React.memo<Props>(({bazi}) => {
    const type = AstrologicalTimeUtil.getType(bazi[2][0] as 天干, bazi[3][0] as 天干, bazi[3][1] as 地支);

    return (
        <Flex
            w="full"
            justifyContent="center"
            alignItems="center"
            bgColor={`${color(type)}.50` || "transparent"}
            opacity={type ? 1 : 0}
            transition="all 0.1s ease-in-out"
            transform={type ? "translateY(0px)" : "translateY(-50%)"}
            color={`${color(type) || "gray"}.500`}
            borderBottomColor={`${color(type) || "gray"}.200`}
            borderBottomWidth={{base: 1, md: 2}}
            borderBottomStyle="dashed"
            fontWeight="bold"
            fontSize={{base: "md", md: "xl"}}
            p={{base: 1, md: 2}}
        >
            {type || <React.Fragment>&nbsp;</React.Fragment>}
        </Flex>
    );
});

const color = (type: TimeType) => {
    switch (type) {
        case "天顯時格":
            return "pink";
        case "五不遇時":
            return "gray";
        case "時干入墓":
            return "green";
        default:
            return null;
    }
};
========================================================= */
