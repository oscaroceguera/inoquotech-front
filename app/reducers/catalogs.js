import { fromJS, List } from 'immutable'

// Actions
export const SECTION_TYPES_REQUEST = 'app/reducers/SECTION_TYPES_REQUEST'
const SECTION_TYPES_SUCCESS = 'app/reducers/SECTION_TYPES_SUCCESS'
const SECTION_TYPES_FAIL = 'app/reducers/SECTION_TYPES_FAIL'

// Actions Creators
export const catalogsActions = {
  sectionTypesRequest: () => ({ type: SECTION_TYPES_REQUEST }),
  sectionTypesSuccess: (sections) => ({ type: SECTION_TYPES_SUCCESS, sections }),
  sectionTypesFail: (error) => ({ type: SECTION_TYPES_FAIL, error })
}

const initialState = fromJS({
  sections: [],
  sectionError: null,
})

function catalogsReducer (state = initialState, action) {
  switch (action.type) {
  case SECTION_TYPES_SUCCESS:
    return state.set('sections', List.of(...action.sections))
  case SECTION_TYPES_FAIL:
    return state
      .set('sectionError', action.error)
  default:
    return state
  }
}

export default catalogsReducer
