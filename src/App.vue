<template>
  <div id="app">
    <h2>AAAAA</h2>
    <h1>{{ res }}</h1>
  </div>
</template>

<script>
import { ref } from "vue";
// import axios from "axios";
// import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";

export default {
  name: "App",
  setup() {
    const res = ref({});
    // const apolloClient = new ApolloClient({
    //   // You should use an absolute URL here
    //   uri: "http://127.0.0.1:3000/graphql",
    // });
    // COMMON TEST

    // apollo
    // apolloClient.query({
    //   query: gql`
    //   query {
    //             adminsGuides {
    //                     id
    //                     title
    //                     content
    //             }
    //         }
    //   `,
    // context: {
    //        headers:{
    //         "United-Cart-Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInR5cGUiOiJhZG1pbiIsImV4cCI6MTY2OTc5MjAzOX0.13V6y-1PwPTW7XcDNmnYR22b_ooGdS490NohHwT2HMQ"
    //        },
    //      }
    //     }).then(res=>console.log(res));
    // axios

    // const getAllTodos = async () => {
    //   res.value = await axios
    //     .get("http://www.dhcd.edu.vn/")
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // };
    // fetch

    fetch("http://192.168.0.108:8080/kk.html", {
      method: "GET",
      header:{
        "referrer-policy": "origin-when-cross-origin, strict-origin-when-cross-origin",
      }
    }).then((res) => res.text()).then(res=>document.querySelector('h1').innerHTML=res);
    // getAllTodos();

    // GRAPHQL TEST
    // apollo
    // apolloClient
    //   .query({
    //     query: gql`
    //       query {
    //         adminsGuides {
    //           id
    //           title
    //           content
    //         }
    //       }
    //     `,
    //     context: {
    //       headers: {
    //         "United-Cart-Authorization":
    //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInR5cGUiOiJhZG1pbiIsImV4cCI6MTY2OTc5MjAzOX0.13V6y-1PwPTW7XcDNmnYR22b_ooGdS490NohHwT2HMQ",
    //       },
    //     },
    //   })
    //   .then((res) => console.log(res));
    // // axios
    // const getAllTodos2 = async () => {
    //   res.value = await axios
    //     .get("https://go-apod.herokuapp.com/apod")
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // };

    // fetch

    // fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "United-Cart-Authorization":
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInR5cGUiOiJhZG1pbiIsImV4cCI6MTY2OTc5MjAzOX0.13V6y-1PwPTW7XcDNmnYR22b_ooGdS490NohHwT2HMQ",
    //   },
    //   body: JSON.stringify({
    //     query: `
    //     query {
    //         adminsGuides {
    //           id
    //           title
    //           content
    //         }
    //       }
    //   `
    //   }),
    // }).then((res) => console.log(res)).then(result=>console.log(result)).catch(err=>console.dir(err));

    // getAllTodos2();

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
