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

export const driverForm = {
  id: new Date().valueOf(),
  updatedAt: new Date().valueOf(),
  title: 'San Francisco Driver Form',
  description: 'Welcome aboard!',
  fields: [
    {
      type: 'text',
      title: 'SSN',
      required: true,
    },
    {
      type: 'radio',
      title: 'Have you driven a car before?',
      options: ['Yes', 'No'],
    },
    {
      type: 'checkbox',
      title: 'Where do you want to work?',
      options: ['Berkeley', 'Oakland', 'San Mateo'],
    },
    {
      type: 'select',
      title: 'What truck do you want?',
      options: ['Ford', 'BMW', 'AvtoVAZ', 'Tesla'],
    },
    {
      type: 'file',
      title: 'What map will you use?',
    },
    {
      type: 'textarea',
      title: 'Describe your work day?',
    },
  ],
}
