import { CustomComponent, Field, FieldClientComponent, FieldServerComponent, TextField } from "payload"
import { CustomField } from "./components"

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
        Field: CustomField as unknown as CustomComponent<FieldClientComponent | FieldServerComponent>,
      },
    },
  } as TextField
}
