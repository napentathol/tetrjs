const statistics = (function() {
    let internalStatistics = {
        O: {
            count: 0,
            type: 1
        },
        I: {
            count: 0,
            type: 2
        },
        L: {
            count: 0,
            type: 3
        },
        J: {
            count: 0,
            type: 4
        },
        S: {
            count: 0,
            type: 5
        },
        Z: {
            count: 0,
            type: 6
        },
        T: {
            count: 0,
            type: 7
        }
    };

    function getNewTetronimo( field ) {
        let pos = new utils.Position( 4, constants.TOTAL_HEIGHT - 2 );
        switch( getWeightedRandomInt() ) {
            default:
            case 1:
                internalStatistics.O.count++;
                return new tetronimos.OTetronimo( field, pos );
            case 2:
                internalStatistics.I.count++;
                return new tetronimos.ITetronimo( field, pos );
            case 3:
                internalStatistics.L.count++;
                return new tetronimos.LTetronimo( field, pos );
            case 4:
                internalStatistics.J.count++;
                return new tetronimos.JTetronimo( field, pos );
            case 5:
                internalStatistics.S.count++;
                return new tetronimos.STetronimo( field, pos );
            case 6:
                internalStatistics.Z.count++;
                return new tetronimos.ZTetronimo( field, pos );
            case 7:
                internalStatistics.T.count++;
                return new tetronimos.TTetronimo( field, pos );
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getWeightedRandomInt() {
        let max = Math.max(
            internalStatistics.O.count,
            internalStatistics.I.count,
            internalStatistics.L.count,
            internalStatistics.J.count,
            internalStatistics.S.count,
            internalStatistics.Z.count,
            internalStatistics.L.count );

        let intArray = [];

        for( const stat in internalStatistics ) {
            let weight = Math.max( (max - internalStatistics[stat].count + 1), constants.MAX_WEIGHT );

            for( let i = 0; i < weight; i++ ) {
                intArray.push( internalStatistics[stat].type );
            }
        }

        console.log( intArray );

        return intArray[ getRandomInt( 0, intArray.length ) ];
    }

    return {
        getNewTetronimo : getNewTetronimo,
        internalStatistics : internalStatistics
    }
})();
