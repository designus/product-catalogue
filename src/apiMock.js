export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require('./data.json'));
    }, 300)
  })
}