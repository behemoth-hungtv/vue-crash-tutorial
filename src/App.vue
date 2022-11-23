<template>
  <div id="app">
    <h1>{{ res }}</h1>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

export default {
  name: "App",
  setup() {
    const res = ref({});
    const apolloClient = new ApolloClient({
      // You should use an absolute URL here
      uri: "http://127.0.0.1:3000/graphql",
    });
    // COMMON TEST

    // apollo
    apolloClient.query({
      query: gql`
      query {
                adminsGuides {
                        id
                        title
                        content
                }
            }
      `,
    context: {
           headers:{
            "United-Cart-Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInR5cGUiOiJhZG1pbiIsImV4cCI6MTY2OTc5MjAzOX0.13V6y-1PwPTW7XcDNmnYR22b_ooGdS490NohHwT2HMQ"
           },
         }
        }).then(res=>console.log(res));
    // axios

    const getAllTodos = async () => {
      res.value = await axios
        .get("https://go-apod.herokuapp.com/apod")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
    // fetch

    fetch("https://go-apod.herokuapp.com/apod", {
      method: "GET",
    }).then((res) => console.log(res));
    getAllTodos();

    // GRAPHQL TEST
    // apollo
    apolloClient.query({
      query: gql`
      query {
                adminsGuides {
                        id
                        title
                        content
                }
            }
      `,
    context: {
           headers:{
            "United-Cart-Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInR5cGUiOiJhZG1pbiIsImV4cCI6MTY2OTc5MjAzOX0.13V6y-1PwPTW7XcDNmnYR22b_ooGdS490NohHwT2HMQ"
           },
         }
        }).then(res=>console.log(res));
    // axios
    const getAllTodos2 = async () => {
      res.value = await axios
        .get("https://go-apod.herokuapp.com/apod")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };

    // fetch

    fetch("https://go-apod.herokuapp.com/apod", {
      method: "GET",
    }).then((res) => console.log(res));
    getAllTodos2();


    return {
      res,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
