import { resolve, getValidator, querySyntax } from '@feathersjs/schema';
import { ObjectIdSchema } from '@feathersjs/schema';
import type { FromSchema } from '@feathersjs/schema';

import type { HookContext } from '../../declarations';
import { dataValidator, queryValidator } from '../../validators';
import type { SaveCodeService } from './save-code.class';

// Main data model schema
export const saveCodeSchema = {
  $id: 'SaveCode',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'text'],
  properties: {
    _id: ObjectIdSchema(),
    text: { type: 'string' }
  }
} as const;

export type SaveCode = FromSchema<typeof saveCodeSchema>;
export const saveCodeValidator = getValidator(saveCodeSchema, dataValidator);
export const saveCodeResolver = resolve<SaveCode, HookContext<SaveCodeService>>({});

export const saveCodeExternalResolver = resolve<SaveCode, HookContext<SaveCodeService>>({});

// Schema for creating new data
export const saveCodeDataSchema = {
  $id: 'SaveCodeData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    text: { type: 'string' }
  }
} as const;

export type SaveCodeData = FromSchema<typeof saveCodeDataSchema>;
export const saveCodeDataValidator = getValidator(saveCodeDataSchema, dataValidator);
export const saveCodeDataResolver = resolve<SaveCodeData, HookContext<SaveCodeService>>({});

// Schema for updating existing data
export const saveCodePatchSchema = {
  $id: 'SaveCodePatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    text: { type: 'string' }
  }
} as const;

export type SaveCodePatch = FromSchema<typeof saveCodePatchSchema>;
export const saveCodePatchValidator = getValidator(saveCodePatchSchema, dataValidator);
export const saveCodePatchResolver = resolve<SaveCodePatch, HookContext<SaveCodeService>>({});

// Schema for allowed query properties
export const saveCodeQuerySchema = {
  $id: 'SaveCodeQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(saveCodeSchema.properties)
  }
} as const;

export type SaveCodeQuery = FromSchema<typeof saveCodeQuerySchema>;
export const saveCodeQueryValidator = getValidator(saveCodeQuerySchema, queryValidator);
export const saveCodeQueryResolver = resolve<SaveCodeQuery, HookContext<SaveCodeService>>({});