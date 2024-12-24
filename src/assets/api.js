export const getItems = async (url) => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error("Ошибка получения данных");
    }
    const data = await resp.json();
    return data; // Возвращаем данные
  } catch (error) {
    return error.message; // Возвращаем сообщение об ошибке
  }
};

export const addItem = async (url, item) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });

<<<<<<< HEAD


export const removeItem = async (url) => {
	try{
		const resp = await fetch(url, {
			method: "DELETE",
		})
		if (!resp.ok) {
			throw new Error("Ошибка удаления")
		} 
	}
	catch (error) {
		return error.message
	}
}
=======
    if (!resp.ok) {
      throw new Error("Ошибка добавления");
    }

    return await resp.json();
  } catch (error) {
    return error.message;
  }
};
>>>>>>> master
