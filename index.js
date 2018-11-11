module.exports = async promises => {
  const result = {
    successes: [],
    errors: []
  }

  const final = promises.map(async promise => {
    try {
      const response = await promise
      result.successes.push(response)
    } catch (error) {
      result.errors.push(error)
    }
  })

  await Promise.all(final)

  return result
}
