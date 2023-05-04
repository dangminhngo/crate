import { Skeleton, Table, Tbody, Td, Th, Thead, Tr } from '../ui'

export default function TagsSkeleton() {
  return (
    <div className="container flex flex-col items-stretch gap-12 py-48">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-3xl font-bold">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-8 w-24" />
        </h3>
        <div className="flex items-center gap-6">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-16" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-10" />
          </div>
        </div>
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Notes</Th>
            <Th>Created</Th>
            <Th>Edited</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: 4 }).map((_, index) => (
            <Tr key={index}>
              <Td className="font-medium">
                <Skeleton className="min-w-[120px]" />
              </Td>
              <Td className="text-slate-400">
                <Skeleton className="min-w-[60px]" />
              </Td>
              <Td>
                <Skeleton className="min-w-[80px]" />
              </Td>
              <Td className="text-slate-400">
                <Skeleton className="min-w-[80px]" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}
