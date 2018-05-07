const userDataURL = 'http://www.mocky.io/v2/5ad6dc462e00007800c93c24';
const getData = () => (
  fetch(userDataURL)
    .then(data => data.json())
    .catch(error => ({ error }))
);


export default getData;
