

export const apiRequest = async (word) => {
  
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

  try {
    return await response.json();
  }
  catch (error) {
    console.log(error);
    return error;
  }
}


