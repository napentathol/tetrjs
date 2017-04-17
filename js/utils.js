const utils = (function () {
    class Position {
        constructor( x, y ) {
            this.x = x;
            this.y = y;
        }
        move( x, y ) {
            this.x += x;
            this.y += y;
        }
    }

    function colorFromType( type ) {
        switch( type ) {
            default:
            case 1:
                return '#ff0';
            case 2:
                return '#0ff';
            case 3:
                return '#f80';
            case 4:
                return '#00f';
            case 5:
                return '#0f0';
            case 6:
                return '#f00';
            case 7:
                return '#f0f';
        }
    }

    function drawGrid( ctx ) {
        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = '#DDD';

        for( let i = 0; i < constants.FIELD_WIDTH; i++ ) {
            for( let j = 0; j < constants.TOTAL_HEIGHT; j++ ) {
                ctx.rect( constants.BLOCK_SIZE * i, constants.BLOCK_SIZE * j, constants.BLOCK_SIZE, constants.BLOCK_SIZE );
            }
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#222';
        ctx.moveTo( 0, constants.HEIGHT_ABOVE_FIELD * constants.BLOCK_SIZE );
        ctx.lineTo( constants.FIELD_WIDTH * constants.BLOCK_SIZE, constants.HEIGHT_ABOVE_FIELD * constants.BLOCK_SIZE );
        ctx.stroke();
    }

    return {
        Position : Position,
        colorFromType: colorFromType,
        drawGrid: drawGrid
    }
})();
