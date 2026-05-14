import React from "react";
import {神煞} from "@/util/AngelDevilUtil";

// We keep the Props interface active so the parent component doesn't break
interface Props {
    items: (神煞 | "貴人")[];
}

// We remove the {items} destructuring so TypeScript doesn't complain it's unused
export const GodDevilRenderer = React.memo<Props>(() => {
    return null; 
});

/* =========================================================
   OLD CODE KEPT FOR FUTURE REFERENCE
   To restore this, delete the top part and uncomment everything below!
   =========================================================
import React from "react";
import {Flex} from "@chakra-ui/react";
import {AngelDevilUtil, 神煞} from "@/util/AngelDevilUtil";

interface Props {
    items: (神煞 | "貴人")[];
}

export const GodDevilRenderer = React.memo<Props>(({items}) => {
    return (
        <React.Fragment>
            {items.map((item, index) => (
                <Flex
                    py={0}
                    px={0.5}
                    fontSize={{base: 10, sm: "sm", md: "md", lg: "xl"}}
                    m={0.5}
                    key={index}
                    bgColor={AngelDevilUtil.isAngel(item as 神煞) ? "red.400" : "gray.500"}
                    color="white"
                    borderRadius={{base: "sm", md: "md"}}
                >
                    {item}
                </Flex>
            ))}
        </React.Fragment>
    );
});
========================================================= */
