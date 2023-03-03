import { configureStore } from '@reduxjs/toolkit'
import { giftApi } from '../services/giftApi'
import { userApi } from '../services/userApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [giftApi.reducerPath]: giftApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(
  //     songApi.middleware,
  //     userApi.middleware,
  //     giftApi.middleware,
  //     stadisticsApi.middleware
  //   ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself

// export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

// export type AppDispatch = typeof store.dispatch;

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
