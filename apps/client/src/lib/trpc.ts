import type { AppRouter } from '@crate/server'
import {
  createTRPCReact,
  type inferReactQueryProcedureOptions,
} from '@trpc/react-query'
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

export const trpc = createTRPCReact<AppRouter>()

export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>
export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>
