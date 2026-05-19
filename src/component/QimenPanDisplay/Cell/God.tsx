import React from "react";
import {八神} from "@/qimen/type";
import {Flex} from "@chakra-ui/react";
import {ColorUtil} from "@/qimen/ColorUtil";
import {ScoreModeUtil} from "@/util/ScoreModeUtil";
import {PinyinTranslationMap} from "@/qimen/dictionary";

interface Props {
    panSize: number;
    value: 八神;
    isScoreMode: boolean;
    highlight?: boolean;
}

export const God = React.memo<Props>(({panSize, value, isScoreMode, highlight}) => {
    return (
        <Flex
            cursor="pointer"
            justifyContent="center"
            fontSize={`${panSize / 25}px`}
            color={isScoreMode ? scoreColor(value) : ColorUtil.八神(value)}
            borderColor={highlight ? "teal.300" : undefined}
            borderWidth={highlight ? {base: 2, md: 4} : undefined}
            borderRadius={{base: "md", md: "xl"}}
            width={panSize / 8}
        >
            <Flex direction="column" align="center" justify="center" lineHeight="1">
                <span style={{ fontWeight: "bold" }}>{value || "　"}</span>
                {value && (
                    <span style={{ fontSize: "0.4em", opacity: 0.6, fontWeight: "normal", marginTop: "2px" }}>
                        {PinyinTranslationMap[value]}
                    </span>
                )}
            </Flex>
        </Flex>
    );
});

const scoreColor = (value: 八神) => {
    switch (ScoreModeUtil.godScore(value)) {
        case "吉":
            return "red.500";
        case "大凶":
            return "green.400";
        case "平":
            return "gray.700";
    }
};
