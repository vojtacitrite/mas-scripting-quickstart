export default function ({ response }) {
  console.log(`Transforming ${response}`)
  const x = ''
  return response.toUpperCase()
}
