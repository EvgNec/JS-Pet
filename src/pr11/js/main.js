const API_KEY = 'mr2ko8j2F137Ck0uSYOFZeFmy8Aio10RDFJx5bTKExEsHckIzmWkhniO'; 
document.getElementById('searchBtn').addEventListener('click', async () => {
    const word = document.getElementById('wordInput').value.trim();
    const resultDiv = document.getElementById('result');
  
    if (!word) {
      resultDiv.innerHTML = 'Введіть слово для пошуку.';
      return;
    }
  
    resultDiv.innerHTML = 'Завантаження...';
  
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${word}&per_page=1`, {
        headers: {
          Authorization: API_KEY
        }
      });
  
      const data = await response.json();
      const photoUrl = data.photos[0]?.src?.medium;
  
      if (photoUrl) {
        resultDiv.innerHTML = `<img src="${photoUrl}" alt="${word}">`;
      } else {
        resultDiv.innerHTML = 'Нічого не знайдено 😕';
      }
    } catch (error) {
      console.error(error);
      resultDiv.innerHTML = 'Сталася помилка при запиті.';
    }
  });