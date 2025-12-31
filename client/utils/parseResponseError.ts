export default (error: any) => {
   if (error.response?.data?.message) {
    return error.response.data.message
  } else {
    return "Network Error"
  }
}