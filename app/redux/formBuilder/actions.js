import { createActionBinded } from 'redux/utils'

export const saveForm = createActionBinded('Save form init')
export const saveFormSuccess = createActionBinded('Save form success')
export const saveFormFailure = createActionBinded('Save form failure')
