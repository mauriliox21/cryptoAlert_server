export class VerifyingAuthenticationError extends Error {
    constructor (message: string) {
      super(message)
      this.name = 'VerifyingAuthenticationError'
    }
}