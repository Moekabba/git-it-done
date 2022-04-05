var getUserRepos = function (user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
    // console.log("inside", response);
  });
};
// this console will print first: example of asynchronous

getUserRepos("instagram");
