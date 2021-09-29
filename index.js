module.exports = async function getContests() {
  const axios = require("axios");
  let result;

  const username = "typeandgo";
  const api_key = "5f275deb005585f6b52afd048c294036a88255a7";

  await axios
    .get("https://clist.by/api/v1/json/contest/?username=" + username + "&api_key=" + api_key + "&limit=20&end__gt=2020-09-19T00%3A00%3A00")
    .then(response => response)
    .then(contest => result = contest.data.objects)
    .catch(err => console.log(err));

    return result;
};