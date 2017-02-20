import { createSelector } from 'reselect'

const requiredFields = (state) => state.chale

export const getRequiredFields = createSelector(
  requiredFields,
  items => items === null
)
