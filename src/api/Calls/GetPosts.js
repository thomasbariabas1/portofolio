import {get} from "../API";
import graphqlResolver from "../../util/graphqlResolver";

const GetPosts = ({page, pageSize}) => {
    // const url = `/posts?page=${page+1}&pageSize=${pageSize}`
    //
    // return get({url})

    return graphqlResolver('getPosts', {page: page+1,pageSize })
}

export default GetPosts