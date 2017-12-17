export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('posts')
      if (serializedState === null) {
        return undefined;
      }
  
      return JSON.parse(serializedState)
  
    } catch (error) {
        console.log(error)
        return undefined
    }
}