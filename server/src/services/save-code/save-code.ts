// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  saveCodeDataValidator,
  saveCodePatchValidator,
  saveCodeQueryValidator,
  saveCodeResolver,
  saveCodeExternalResolver,
  saveCodeDataResolver,
  saveCodePatchResolver,
  saveCodeQueryResolver
} from './save-code.schema'

import type { Application } from '../../declarations'
import { SaveCodeService, getOptions } from './save-code.class'

export const saveCodePath = 'save-code'
export const saveCodeMethods: Array<keyof SaveCodeService> = ['find', 'get', 'create', 'patch', 'remove']

export * from './save-code.class'
export * from './save-code.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const saveCode = (app: Application) => {
  // Register our service on the Feathers application
  app.use(saveCodePath, new SaveCodeService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: saveCodeMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(saveCodePath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(saveCodeExternalResolver),
        schemaHooks.resolveResult(saveCodeResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(saveCodeQueryValidator),
        schemaHooks.resolveQuery(saveCodeQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(saveCodeDataValidator),
        schemaHooks.resolveData(saveCodeDataResolver)
      ],
      patch: [
        schemaHooks.validateData(saveCodePatchValidator),
        schemaHooks.resolveData(saveCodePatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [saveCodePath]: SaveCodeService
  }
}
