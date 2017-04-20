const Field = (function(){
    return class Field {
        constructor() {
            let field = [];

            for( let i = 0; i < constants.TOTAL_HEIGHT; i++ ) {
                field[i] = [];
                for( let j = 0; j < constants.FIELD_WIDTH; j++ ) {
                    field[i][j] = 0;
                }
            }
            this.field = field;
        }

        contains( x, y ) {
            return this.field[y][x] != 0;
        }

        place( tetr ) {
            for( const block of tetr.getBlockArray() ) {
                this.field[block.y][block.x] = tetr.type;
            }
        }

        render( ctx ) {
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'black';
            for( let i = 0; i < constants.TOTAL_HEIGHT; i++ ) {
                for( let j = 0; j < constants.FIELD_WIDTH; j++ ) {
                    let type = this.field[i][j];
                    let color = utils.colorFromType( type );

                    ctx.beginPath();
                    ctx.fillStyle = color;
                    if( type != 0 ) {
                        ctx.rect(
                            j * constants.BLOCK_SIZE,
                            (constants.TOTAL_HEIGHT - i - 1) * constants.BLOCK_SIZE,
                            constants.BLOCK_SIZE, constants.BLOCK_SIZE );
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }
        }

        clearCompleteLinesAndReturnScore() {
            let completeLines = 0;

            for( let i = 0; i < constants.FIELD_HEIGHT; ) {
                const row = this.field[i];
                let allOccupied = true;
                for( let j = 0; j < constants.FIELD_WIDTH; j++ ) {
                    allOccupied &= (row[j] != 0)
                }
                if( allOccupied ) {
                    this.removeRow( i );
                    completeLines++;
                } else {
                    i++;
                }
            }

            return completeLines >= constants.BONUS_LINE_CLEAR ? completeLines + 1 : completeLines;
        }

        removeRow( i ) {
            this.field.splice( i, 1 );
            this.field[constants.TOTAL_HEIGHT - 1] = [];
            for ( let j = 0; j < constants.FIELD_WIDTH; j++ ) {
                this.field[constants.TOTAL_HEIGHT - 1][j] = 0;
            }
        }

        hasLost() {
            for ( let i = constants.FIELD_HEIGHT; i < constants.TOTAL_HEIGHT; i++ ) {
                const row = this.field[i];
                for ( const type of row ) {
                    if( type != 0 ) return true;
                }
            }
            return false;
        }
    };
})();
