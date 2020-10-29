import {ApolloClient, gql, InMemoryCache} from "@apollo/client";
import GraphQlQueryBuilder from "./graphQlQueryBuilder";

const API_HOST = process.env.REACT_APP_API_HOST

if (!window.apolloClient) {
    window.apolloClient = new ApolloClient({
        uri: `${API_HOST}/graphql`,
        cache: new InMemoryCache()
    });
}

export default (resolver, data, query) => {
    if (!window.apolloClient) {
        return new Promise()
    }
    switch (resolver) {
        case "getInstanceByIdentifier":
            const getInstanceByIdentifierQuery = GraphQlQueryBuilder.builder()
                .addFunction(`getInstanceByIdentifier(identifier: "${data.instanceIdentifier}")`)
                .addField("theme")
                .addField("homePageImg")
                .addField("firstName")
                .addField("lastName")
                .addField("profileImg")
                .addField("view")
                .openBr()
                .addField("menu")
                .openBr()
                .addField("name")
                .addField("active")
                .closeBr()
                .closeBr()
                .build()

            return window.apolloClient.query({
                query: gql`${getInstanceByIdentifierQuery}`
            }).then(({data}) => data.getInstanceByIdentifier);

        case "getPostById":
            const getPostByIdQuery = GraphQlQueryBuilder.builder()
                .addFunction(`getPostById(identifier: "${data.postId}")`)
                .addField("title")
                .addField("coverImg")
                .addField("person")
                .openBr()
                .addField("firstName")
                .addField("lastName")
                .addField("profileImg")
                .closeBr()
                .addField("creationDate")
                .addField("body")
                .openBr()
                .addField("type")
                .addField("data")
                .openBr()
                .addField("code")
                .addField("text")
                .addField("caption")
                .addField("alignment")
                .closeBr()
                .closeBr()
                .build()

            return window.apolloClient.query({
                query: gql`${getPostByIdQuery}`
            }).then(({data}) => data.getPostById);
        case "getPosts":
            const getPostsQuery = GraphQlQueryBuilder.builder()
                .addFunction(`getPosts(page: "${data.page}", pageSize: "${data.pageSize}")`)
                .addField("page")
                .addField("totalDocs")
                .addField("limit")
                .addField("hasNextPage")
                .addField("hasPrevPage")
                .addField("nextPage")
                .addField("pagingCounter")
                .addField("totalPages")
                .addField("docs")
                .openBr()
                .addField("_id")
                .addField("title")
                .addField("coverText")
                .addField("creationDate")
                .addField("coverImg")
                .addField("person")
                .openBr()
                .addField("firstName")
                .addField("lastName")
                .addField("profileImg")
                .closeBr()
                .closeBr()
                .build()

            return window.apolloClient.query({
                query: gql`${getPostsQuery}`
            }).then(({data}) => data.getPosts);
        case "getAbouts":
            const getAboutsQuery = GraphQlQueryBuilder.builder()
                .addFunction(`getAbouts(page: "${data.page+1}", pageSize: "${data.pageSize}")`)
                .addField("page")
                .addField("totalDocs")
                .addField("limit")
                .addField("hasNextPage")
                .addField("hasPrevPage")
                .addField("nextPage")
                .addField("pagingCounter")
                .addField("totalPages")
                .addField("docs")
                 .openBr()
                  .addField("_id")
                  .addField("about")
                  .openBr()
                   .addField("type")
                   .addField("data")
                    .openBr()
                     .addField("code")
                     .addField("text")
                     .addField("caption")
                     .addField("alignment")
                    .closeBr()
                 .closeBr()
                .addField("active_date")
                .addField("person")
                .openBr()
                .addField("firstName")
                .addField("lastName")
                .addField("profileImg")
                .closeBr()
                .closeBr()
                .build()

            return window.apolloClient.query({
                query: gql`${getAboutsQuery}`
            }).then(({data}) => data.getAbouts);
        case "getAboutById":
            const getAboutByIdQuery = GraphQlQueryBuilder.builder()
                .addFunction(`getAboutById(identifier: "${data.aboutId}")`)
                .addField("_id")
                .addField("active")
                .addField("about")
                .openBr()
                .addField("type")
                .addField("data")
                .openBr()
                .addField("code")
                .addField("text")
                .addField("caption")
                .addField("alignment")
                .closeBr()
                .closeBr()
                .addField("active_date")
                .addField("person")
                .openBr()
                .addField("firstName")
                .addField("lastName")
                .addField("profileImg")
                .closeBr()
                .build()

            return window.apolloClient.query({
                query: gql`${getAboutByIdQuery}`
            }).then(({data}) => data.getAboutById);
        case "getActiveAbout":
            const getActiveAboutQuery = GraphQlQueryBuilder.builder()
                .addFunction(`getActiveAbout`)
                .addField("_id")
                .addField("active")
                .addField("about")
                .openBr()
                .addField("type")
                .addField("data")
                .openBr()
                .addField("code")
                .addField("text")
                .addField("caption")
                .addField("alignment")
                .closeBr()
                .closeBr()
                .addField("active_date")
                .addField("person")
                .openBr()
                .addField("firstName")
                .addField("lastName")
                .addField("profileImg")
                .addField("facebook")
                .addField("twitter")
                .addField("medium")
                .addField("github")
                .closeBr()
                .build()

            return window.apolloClient.query({
                query: gql`${getActiveAboutQuery}`
            }).then(({data}) => data.getActiveAbout);
    }

}