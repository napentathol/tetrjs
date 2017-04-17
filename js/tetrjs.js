(function () {
    let canvas = document.getElementById("tetrjs");
    let ctx = canvas.getContext("2d");
    let field = new Field();
    let tetr = getNewTetronimo();
    let blockedTicks = 0;
    let score = 0;

    function getNewTetronimo() {
        let pos = new utils.Position( 4, constants.TOTAL_HEIGHT - 2 );
        switch( getRandomInt( 1, 8) ) {
            default:
            case 1:
                return new tetronimos.OTetronimo( field, pos );
            case 2:
                return new tetronimos.ITetronimo( field, pos );
            case 3:
                return new tetronimos.LTetronimo( field, pos );
            case 4:
                return new tetronimos.JTetronimo( field, pos );
            case 5:
                return new tetronimos.STetronimo( field, pos );
            case 6:
                return new tetronimos.ZTetronimo( field, pos );
            case 7:
                return new tetronimos.TTetronimo( field, pos );
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function tick() {
        // check if blocked.
        if ( !tetr.moveDown() ) {
            blockedTicks++;
        } else {
            blockedTicks = 0;
        }

        // if blocked for more than one tick, place the tetronimo on the field, and grab a new tetronimo.
        if( blockedTicks > 1 ) {
            field.place( tetr );
            score += field.clearCompleteLinesAndReturnScore();
            let scoreBox = document.getElementById("score");
            scoreBox.innerHTML = "Score: " + score;
            blockedTicks = 0;

            if( field.hasLost() ) {
                window.clearInterval( interval );
                return;
            }

            tetr = getNewTetronimo();
        }

        render();
    }

    function render() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        utils.drawGrid( ctx );
        field.render( ctx );
        tetr.render( ctx );
    }

    let interval = window.setInterval( tick, 500 );

    window.onkeydown = function onKeyDown(e) {
        if( field.hasLost() ) return;

        switch (e.keyCode) {
            case 40:
                tetr.moveDown();
                break;
            case 37:
                tetr.moveLeft();
                break;
            case 39:
                tetr.moveRight();
                break;
            case 38:
                tetr.rotateRight();
                break;
            default:
                break;
        }

        render();
    };

    render();
})();
