export const setTheme = (theme: 'dark' | 'light') => {
  localStorage.setItem('theme', theme)
}

export const getTheme = () => {
  return localStorage.getItem('theme')
}
