export const validateResponse = async (response: Response) => {
  if (!response.ok) {
    let error: object | string
    try {
      error = await response.json()
    } catch {
      error = await response.text()
    }
    throw error
  }
}
