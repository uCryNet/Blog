export default (() => {
  let timer: number

  return (callback: () => void, ms: number) => {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()