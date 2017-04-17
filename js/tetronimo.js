const Tetronimo = (function() {
    return class Tetronimo {
        constructor( field, pos, type ) {
            this.field = field;
            this.pos = pos;
            this.color = utils.colorFromType(type);
            this.type = type;
            this.rotation = 0;
        }

        getBlockArray() {
            return this.getHypotheticalBlockArray(this.rotation);
        }

        getHypotheticalBlockArray(rotation) {
            return [];
        }

        rotateLeft() {
            this.rotate(true);
        }

        rotateRight() {
            this.rotate(false);
        }

        rotate(left) {
            let rotation = this.rotation;
            rotation += left ? -1 : 1;
            if (rotation > 3) rotation %= 4;
            if (rotation < 0) rotation = rotation % 4 + 4;

            if (this.checkRotation(rotation)) {
                this.rotation = rotation;
                return true;
            }
            return false;
        }

        checkRotation(rotation) {
            for (const block of this.getHypotheticalBlockArray(rotation)) {
                if ( this.doCheck( block.x, block.y) ) return false;
            }
            return true;
        }

        moveDown() {
            return this.move(0, -1);
        }

        moveLeft() {
            return this.move(-1, 0);
        }

        moveRight() {
            return this.move(1, 0);
        }

        move( x, y ) {
            if (this.checkMove(x, y)) {
                this.pos.move(x, y);
                return true;
            }
            return false;
        }

        checkMove( dx, dy ) {
            for (const block of this.getBlockArray()) {
                let x = block.x + dx;
                let y = block.y + dy;
                if ( this.doCheck( x, y ) ) return false;
            }
            return true;
        }

        doCheck( x, y ) {
            // check lower, right, and left bounds followed by field.
            return y < 0 || x >= constants.FIELD_WIDTH || x < 0 || this.field.contains( x, y );
        }

        render(ctx) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.fillStyle = this.color;
            ctx.strokeStyle = 'black';
            for (const block of this.getBlockArray()) {
                ctx.rect(
                    block.x * constants.BLOCK_SIZE,
                    (constants.TOTAL_HEIGHT - block.y - 1) * constants.BLOCK_SIZE,
                    constants.BLOCK_SIZE, constants.BLOCK_SIZE);
                ctx.fill();
            }
            ctx.stroke();
        }
    }
})();
