export class AuthenticationFailedError extends Error {
    constructor (message: string) {
      super(message)
      this.name = 'AuthenticationFailedError'
    }
}