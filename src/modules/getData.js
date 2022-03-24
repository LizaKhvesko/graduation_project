export const getData = (url) => {
      return fetch(url)
        .then(response => response.json())
        .catch(() => console.log('Произошла ошибка, данных нет!'))
}