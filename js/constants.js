const constants = (function () {
    const FIELD_HEIGHT = 22;
    const HEIGHT_ABOVE_FIELD = 4;
    return {
        BLOCK_SIZE : 20,
        FIELD_WIDTH : 10,
        FIELD_HEIGHT : FIELD_HEIGHT,
        HEIGHT_ABOVE_FIELD : HEIGHT_ABOVE_FIELD,
        TOTAL_HEIGHT : FIELD_HEIGHT + HEIGHT_ABOVE_FIELD,
        BONUS_LINE_CLEAR : 4,
        MAX_WEIGHT : 6,
        MS_BETWEEN_TICKS : 500
    }
})();

