(function () {
    let canvas = document.getElementById("tetrjs");
    let ctx = canvas.getContext("2d");
    let field = new Field();
    let tetr = statistics.getNewTetronimo( field );
    let blockedTicks = 0;
    let score = 0;
    let paused = false;

    function tick() {
        if( paused ) return;

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

            tetr = statistics.getNewTetronimo( field );
        }

        render();
    }

    function render() {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        utils.drawGrid( ctx );

        if( paused ) return;

        field.render( ctx );
        tetr.render( ctx );
    }

    let interval = window.setInterval( tick, constants.MS_BETWEEN_TICKS );

    window.onkeydown = function onKeyDown(e) {
        if( field.hasLost() ) return;

        if( paused && e.keyCode != 27 ) return;

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
            case 27:
                paused = !paused;
                render();
                break;
            default:
                break;
        }

        render();
    };

    render();
})();
