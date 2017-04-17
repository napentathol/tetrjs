const tetronimos = ( function () {
    const Position = utils.Position;

    class OTetronimo extends Tetronimo {
        constructor( field, pos ) {
            super( field, pos, 1 );
        }

        getHypotheticalBlockArray( rotation ) {
            return [
                new Position( this.pos.x, this.pos.y),
                new Position( this.pos.x + 1, this.pos.y),
                new Position( this.pos.x, this.pos.y - 1),
                new Position( this.pos.x + 1, this.pos.y - 1)
            ];
        }
    }

    class ITetronimo extends Tetronimo {
        constructor( field, pos ) {
            super( field, pos, 2 );
        }

        getHypotheticalBlockArray( rotation ) {
            switch ( rotation ) {
                case 1:
                    return [
                        new Position( this.pos.x - 2, this.pos.y ),
                        new Position( this.pos.x - 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x + 1, this.pos.y )
                    ];
                case 2:
                    return [
                        new Position( this.pos.x, this.pos.y + 2 ),
                        new Position( this.pos.x, this.pos.y + 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x, this.pos.y - 1 )
                    ];
                case 3:
                    return [
                        new Position( this.pos.x + 2, this.pos.y ),
                        new Position( this.pos.x + 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x - 1, this.pos.y )
                    ];
                case 0:
                default:
                    return [
                        new Position( this.pos.x, this.pos.y - 2 ),
                        new Position( this.pos.x, this.pos.y - 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x, this.pos.y + 1 )
                    ];
            }
        }
    }

    class LTetronimo extends Tetronimo {
        constructor( field, pos ) {
            super( field, pos, 3 );
        }

        getHypotheticalBlockArray( rotation ) {
            switch ( rotation ) {
                case 2:
                    return [
                        new Position( this.pos.x + 1, this.pos.y - 1 ),
                        new Position( this.pos.x, this.pos.y - 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x, this.pos.y + 1 )
                    ];
                case 1:
                    return [
                        new Position( this.pos.x + 1, this.pos.y + 1 ),
                        new Position( this.pos.x + 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x - 1, this.pos.y )
                    ];
                case 0:
                    return [
                        new Position( this.pos.x - 1, this.pos.y + 1 ),
                        new Position( this.pos.x, this.pos.y + 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x, this.pos.y - 1 )
                    ];
                case 3:
                default:
                    return [
                        new Position( this.pos.x - 1, this.pos.y - 1 ),
                        new Position( this.pos.x - 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x + 1, this.pos.y )
                    ];
            }
        }
    }

    class JTetronimo extends Tetronimo {
        constructor( field, pos ) {
            super( field, pos, 4 );
        }

        getHypotheticalBlockArray( rotation ) {
            switch ( rotation ) {
                case 2:
                    return [
                        new Position( this.pos.x - 1, this.pos.y - 1 ),
                        new Position( this.pos.x, this.pos.y - 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x, this.pos.y + 1 )
                    ];
                case 1:
                    return [
                        new Position( this.pos.x + 1, this.pos.y - 1 ),
                        new Position( this.pos.x + 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x - 1, this.pos.y )
                    ];
                case 0:
                    return [
                        new Position( this.pos.x + 1, this.pos.y + 1 ),
                        new Position( this.pos.x, this.pos.y + 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x, this.pos.y - 1 )
                    ];
                case 3:
                default:
                    return [
                        new Position( this.pos.x - 1, this.pos.y + 1 ),
                        new Position( this.pos.x - 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x + 1, this.pos.y )
                    ];
            }
        }
    }

    class STetronimo extends Tetronimo {
        constructor( field, pos ) {
            super( field, pos, 5 );
        }

        getHypotheticalBlockArray( rotation ) {
            switch ( rotation ) {
                case 2:
                    return [
                        new Position( this.pos.x + 1, this.pos.y - 1 ),
                        new Position( this.pos.x + 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x, this.pos.y + 1 )
                    ];
                case 1:
                    return [
                        new Position( this.pos.x + 1, this.pos.y + 1 ),
                        new Position( this.pos.x, this.pos.y + 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x - 1, this.pos.y )
                    ];
                case 0:
                    return [
                        new Position( this.pos.x - 1, this.pos.y + 1 ),
                        new Position( this.pos.x - 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x, this.pos.y - 1 )
                    ];
                case 3:
                default:
                    return [
                        new Position( this.pos.x - 1, this.pos.y - 1 ),
                        new Position( this.pos.x, this.pos.y - 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x + 1, this.pos.y )
                    ];
            }
        }
    }

    class ZTetronimo extends Tetronimo {
        constructor( field, pos ) {
            super( field, pos, 6 );
        }

        getHypotheticalBlockArray( rotation ) {
            switch ( rotation ) {
                case 2:
                    return [
                        new Position( this.pos.x - 1, this.pos.y - 1 ),
                        new Position( this.pos.x - 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x, this.pos.y + 1 )
                    ];
                case 1:
                    return [
                        new Position( this.pos.x + 1, this.pos.y - 1 ),
                        new Position( this.pos.x, this.pos.y - 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x - 1, this.pos.y )
                    ];
                case 0:
                    return [
                        new Position( this.pos.x + 1, this.pos.y + 1 ),
                        new Position( this.pos.x + 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x, this.pos.y - 1 )
                    ];
                case 3:
                default:
                    return [
                        new Position( this.pos.x - 1, this.pos.y + 1 ),
                        new Position( this.pos.x, this.pos.y + 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x + 1, this.pos.y )
                    ];
            }
        }
    }

    class TTetronimo extends Tetronimo {
        constructor( field, pos ) {
            super( field, pos, 7 );
        }

        getHypotheticalBlockArray( rotation ) {
            switch ( rotation ) {
                case 2:
                    return [
                        new Position( this.pos.x, this.pos.y - 1),
                        new Position( this.pos.x, this.pos.y + 1 ),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x + 1, this.pos.y )
                    ];
                case 1:
                    return [
                        new Position( this.pos.x, this.pos.y),
                        new Position( this.pos.x, this.pos.y + 1 ),
                        new Position( this.pos.x - 1, this.pos.y ),
                        new Position( this.pos.x + 1, this.pos.y )
                    ];
                case 0:
                    return [
                        new Position( this.pos.x, this.pos.y - 1),
                        new Position( this.pos.x, this.pos.y + 1 ),
                        new Position( this.pos.x - 1, this.pos.y ),
                        new Position( this.pos.x, this.pos.y )
                    ];
                case 3:
                default:
                    return [
                        new Position( this.pos.x, this.pos.y - 1),
                        new Position( this.pos.x, this.pos.y ),
                        new Position( this.pos.x - 1, this.pos.y ),
                        new Position( this.pos.x + 1, this.pos.y )
                    ];
            }
        }
    }

    return {
        OTetronimo : OTetronimo,
        JTetronimo : JTetronimo,
        LTetronimo : LTetronimo,
        ITetronimo : ITetronimo,
        STetronimo : STetronimo,
        ZTetronimo : ZTetronimo,
        TTetronimo : TTetronimo
    }
})();
