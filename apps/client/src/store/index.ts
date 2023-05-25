import {
  combineReducers,
  configureStore,
  type PreloadedState,
} from '@reduxjs/toolkit'

import settingsReducer from './slices/settings.slice'

const rootReducer = combineReducers({
  settings: settingsReducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
