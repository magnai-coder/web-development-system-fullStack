import { saveCode } from './save-code/save-code'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(saveCode)
  // All services will be registered here
}
