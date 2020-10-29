import {get} from "../API";
import graphqlResolver from "../../util/graphqlResolver";

const GetActiveAbout = () => {
    // const url = `/about/latest`
    // return get({url})
    //
    return graphqlResolver("getActiveAbout",{})
}

export default GetActiveAbout