export const getFilmsAPI = async () => {
  const response = await fetch('https://startmeup.herokuapp.com/api/movies');
  return await response.json();
};
