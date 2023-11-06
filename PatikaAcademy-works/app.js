async function getData() {
  await axios("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    console.log(res.data)
  );
  await axios(`https://jsonplaceholder.typicode.com/posts?id=1`).then((res) =>
    console.log(res.data)
  );
}
getData();
