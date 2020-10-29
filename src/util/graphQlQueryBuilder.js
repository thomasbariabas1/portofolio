class GraphQlQueryBuilder {
    baseString = `query {`
    addParametersCount = 0
    lastCall = ""
    removeLastElement = (str) => {
        if (!str) {
            return ""
        }

        if (typeof str !== "string") {
            throw new Error("No string attached!")
        }

        return str.substring(0, str.length - 1)
    }
    static builder = () => {
        return new GraphQlQueryBuilder()
    }

    openBr = () =>{
        this.lastCall = "openBr"
        this.baseString = this.removeLastElement(this.baseString)

        this.baseString = `${this.baseString} {`
        return this
    }

    closeBr = () => {
        this.lastCall = "closeBr"
        if( this.lastCall  === "addField"){
            this.baseString = this.removeLastElement(this.baseString)
        }

        this.baseString = `${this.baseString} }`
        return this
    }

    addField = (fieldName) => {
        this.lastCall = "addField"

        this.baseString = `${this.baseString} ${fieldName},`
        return this
    }

    addFunction = (func) => {
        this.lastCall = "addFunction"

        this.baseString = `${this.baseString} ${func}{`
        return this
    }

    build = () => {

        return this.baseString + "}}"
    }
}

export default GraphQlQueryBuilder