console.log('Starting callbacks.js');

let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Derrick'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(1, (userObject) => {
 console.log(userObject);
});
