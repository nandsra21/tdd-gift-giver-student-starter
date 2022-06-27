const { BadRequestError } = require("../utils/errors");

class GiftExchange {
    static pairs(names) {
        if (names === undefined || (names.length % 2) === 1) {
            throw new BadRequestError("Number of names can't be odd")
        }
        let tupleList = []
        while(names.length != 0) {
            let tuple = []
            let index = (Math.random() * (names.length - 1)).toFixed(0);
            tuple[0] = names[index]
            names.splice(index, 1)
            index = (Math.random() * (names.length - 1)).toFixed(0);
            tuple[1] = names[index]
            names.splice(index, 1)
            tupleList.push(tuple)

        }
        return tupleList

    }

    static traditional(names) {
        if (names === undefined) {
            throw new BadRequestError("Names should be defined")
        }
        let strArray = []
        let index = (Math.random() * (names.length - 1)).toFixed(0);
        let start = names[index]
        let firstPerson = names[index]
        names.splice(index, 1)
        while(names.length != 0) {
            let string = start + " is giving a gift to "
            index = (Math.random() * (names.length - 1)).toFixed(0);
            let newStart = names[index]
            string += newStart
            names.splice(index, 1)
            strArray.push(string)
            start = newStart
        }
        strArray.push(start + " is giving a gift to " + firstPerson)
        return strArray
    }
}
module.exports = GiftExchange