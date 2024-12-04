import { Field, TextField } from "payload"

export const customField = (
  options?: Partial<TextField>,
): Field => {
  const { name, ...rest } = options || {}

  return {
    ...rest,
    type: 'text',
    name: name || 'custom',
    admin: {
      ...rest?.admin,
      components: {
        ...rest?.admin?.components,
        Field: {
          path: '@innovixx/custom-field',
          exportName: 'CustomField',
        },
      },
    },
  } as TextField
}

export * from './components'