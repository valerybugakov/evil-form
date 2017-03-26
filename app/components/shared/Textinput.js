import React from 'react'
import { compose, withState, withHandlers } from 'reassemble'
import Icon from 'components/shared/Icon'

const Textinput = ({ input, inEditMode, handleEditClick, handleBlur }) => (
  <div>
    {
      inEditMode
        ? <input autoFocus {...input} onBlur={handleBlur} />
        : (
          <div>
            {input.value}
            <Icon
              width="8"
              height="12"
              name="edit"
              onClick={handleEditClick}
            />
          </div>
        )
    }
  </div>
)

export default compose(
  withState('inEditMode', 'setEditMode', false),
  withHandlers({
    handleBlur: ({ input, setEditMode }) => e => {
      input.onBlur(e.target.value)
      setEditMode(false)
    },
    handleEditClick: ({ setEditMode }) => _ => setEditMode(true),
  }),
)(Textinput)
