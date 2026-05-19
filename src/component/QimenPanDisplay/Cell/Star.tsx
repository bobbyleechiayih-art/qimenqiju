import React from "react";
import {Flex, Tooltip} from "@chakra-ui/react";
import {ColorUtil} from "@/qimen/ColorUtil";
import {九星} from "@/qimen/type";
import {ScoreModeUtil} from "@/util/ScoreModeUtil";
import {PinyinTranslationMap} from "@/qimen/dictionary";

interface Props {
    panSize: number;
    isScoreMode: boolean;
    value: 九星;
    tooltip?: string;
}

export const Star = React.memo<Props>(({panSize, value, isScoreMode, tooltip}) => {
    return (
        <Flex 
            cursor="pointer" 
            justifyContent="center" 
            fontSize={`${panSize / 20}px`} 
            color={isScoreMode ? scoreColor(value) : ColorUtil.九星(value)}
        >
            <Tooltip hasArrow label={tooltip} aria-label={tooltip}>
                <Flex direction="column" align="center" justify="center" lineHeight="1">
                    <span style={{ fontWeight: "bold" }}>{value || "　"}</span>
                    {value && (
                        <span style={{ fontSize: "0.4em", opacity: 0.6, fontWeight: "normal", marginTop: "2px" }}>
                            {PinyinTranslationMap[value]}
                        </span>
                    )}
                </Flex>
            </Tooltip>
        </Flex>
    );
});

const scoreColor = (value: 九星) => {
    switch (ScoreModeUtil.starScore(value)) {
        case "吉":
            return "red.500";
        case "大凶":
            return "green.400";
        case "平":
            return "gray.700";
    }
};
