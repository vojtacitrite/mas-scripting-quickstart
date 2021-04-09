export default function ({ response }) {
  console.log(`Transforming ${response}`)
  return response.toUpperCase()
}
