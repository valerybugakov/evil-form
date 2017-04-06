import { Text, File, Textarea, WithOptions } from 'components/shared/Choices'

export const fieldTypes = {
  text: {
    label: 'Single-line text',
    choiceComponent: Text,
  },
  radio: {
    label: 'Radio button',
    choiceComponent: WithOptions,
    hasOptions: true,
  },
  checkbox: {
    label: 'Checkboxes',
    choiceComponent: WithOptions,
    hasOptions: true,
  },
  select: {
    label: 'Select',
    choiceComponent: WithOptions,
    hasOptions: true,
  },
  file: {
    label: 'File upload',
    choiceComponent: File,
  },
  textarea: {
    type: 'textarea',
    label: 'Paragraph text',
    choiceComponent: Textarea,
  },
}
