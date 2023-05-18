//////////////get data with async function
async function getAllUsers() {
  let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let data = await response.json();
  console.log(data);
}
getAllUsers();

//////////////get data with axios
axios
  .get(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => console.log(response.data));

//////////////delete by id
// async function deleteUserById (id){
//     try {
//         await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// deleteUserById(4)

//////////////get data with instance
const instance = axios.create({
  baseURL: `https://northwind.vercel.app/api/`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
async function getAll() {
  try {
    let response = await instance.get("suppliers");
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}
getAll();
