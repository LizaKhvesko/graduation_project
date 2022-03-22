export const getData = () => {
      return fetch('../db.json')
        .then(response => response.json())
        .catch(error => console.log('Произошла ошибка, данных нет!'))
}