const knightProto = {
    getPosition() {
        return this.position;
    },
    setPosition(pos){
        this.position = pos;
    }
};

const knight = (startPosition) => {
    let knight = Object.create(knightProto, {
        position : { 
            writable: true,
            configurable: true,
            value: startPosition
        }
    });
    return knight;
};

module.exports = knight;