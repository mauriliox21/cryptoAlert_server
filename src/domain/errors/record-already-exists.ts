export class RecordAlreadyExistsError extends Error {
    constructor (message: string) {
      super(message)
      this.name = 'RecordAlreadyExistsError'
    }
}