export const getItems = async url => {
	try {
		const resp = await fetch(url)
		if (!resp.ok) {
			throw new Error('Ошибка получения данных')
		}
		const data = await resp.json()
		return data // Возвращаем данные
	} catch (error) {
		return error.message // Возвращаем сообщение об ошибке
	}
}
