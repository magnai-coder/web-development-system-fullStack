// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { SaveCode, SaveCodeData, SaveCodePatch, SaveCodeQuery } from './save-code.schema'

export type { SaveCode, SaveCodeData, SaveCodePatch, SaveCodeQuery }

export interface SaveCodeParams extends MongoDBAdapterParams<SaveCodeQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class SaveCodeService<ServiceParams extends Params = SaveCodeParams> extends MongoDBService<
  SaveCode,
  SaveCodeData,
  SaveCodeParams,
  SaveCodePatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('save-code'))
  }
}
