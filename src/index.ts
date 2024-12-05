import type { Field, TextField } from "payload"

export const customField = (
  options?: Partial<TextField>,
): Field => {
  const { name, ...rest } = options || {}

  return {
    ...rest,
    name: name || 'custom',
    type: 'text',
    admin: {
      ...rest?.admin,
      components: {
        ...rest?.admin?.components,
        Field: {
          exportName: 'CustomField',
          path: '@innovixx/custom-field',
        },
      },
    },
  } as TextField
}

export * from './components'