import {get} from "../API";
import graphqlResolver from "../../util/graphqlResolver";

const GetPost = (postId) => {
    return graphqlResolver('getPostById', {postId})
}

export default GetPost