import {get} from "../API";
import graphqlResolver from "../../util/graphqlResolver";

const GetAbouts = ({page, pageSize}) => {
    // const url = `/about?page=${page+1}&pageSize=${pageSize}`
    // return get({url})

    return graphqlResolver("getAbouts", {page, pageSize})
}

export default GetAbouts