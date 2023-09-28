import { createServer } from 'miragejs'

export default function () {
  createServer({
    routes() {
      this.post('/upload', () => {
        const attrs = JSON.parse(request.requestBody)
        console.log(attrs)
        debugger
      })
    },
  })
}
