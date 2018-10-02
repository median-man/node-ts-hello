import app from './App'

const port = process.env.PORT || 3000

export default app.listen(port, () => {
  /* tslint:disable-next-line: no-console*/
  console.log(`app listening on port ${port}`)
})
