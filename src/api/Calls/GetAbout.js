import {get} from "../API";
import graphqlResolver from "../../util/graphqlResolver";

const GetAbout = (aboutId) => {
    // const url = `/about/${aboutId}`
    // return get({url})

    return graphqlResolver("getAboutById", {aboutId})
}

export default GetAbout