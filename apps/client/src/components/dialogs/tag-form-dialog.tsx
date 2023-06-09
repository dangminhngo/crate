import { useState } from 'react'
import { useCreateTag, useUpdateTagById } from '~/hooks'
import type { RouterOutputs } from '~/lib/trpc'
import { styled } from '~/stitches.config'

import { AddBox, Clear, Pen } from '../icons'
import {
  Button,
  Dialog,
  DialogClose,
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Flex,
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  Icon,
  Input,
  useToast,
} from '../primitive'
import ColorPicker from '../shared/color-picker'
import IconButton from '../shared/icon-button'

export default function TagFormDialog({
  tag,
}: {
  tag?: RouterOutputs['tag']['byId']
}) {
  const editing = !!tag
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState(tag?.title ?? '')
  const [color, setColor] = useState<string | undefined>(
    tag?.color ?? undefined
  )
  const { toast } = useToast()
  const { mutate: updateTag } = useUpdateTagById({
    onSuccess: () => {
      toast({
        variant: 'success',
        title: 'Tag Updated',
        description: `A tag has been updated.`,
      })
    },
  })
  const { mutate: createTag } = useCreateTag({
    onSuccess: () => {
      toast({
        variant: 'success',
        title: 'Tag Created',
        description: `A tag has been added.`,
      })
    },
  })

  const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (editing) {
      updateTag({ id: tag.id, data: { title, color } })
    } else {
      createTag({ title, color })
    }
    setVisible(false)
  }

  return (
    <Dialog open={visible} onOpenChange={setVisible}>
      <DialogTrigger asChild>
        {editing ? (
          <IconButton tooltip="Edit">
            <Icon as={Pen} />
          </IconButton>
        ) : (
          <IconButton tooltip="New">
            <Icon as={AddBox} />
          </IconButton>
        )}
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>{editing ? 'Edit tag' : 'Create tag'}</DialogTitle>
          <StyledTagFormContainer>
            <Form onSubmit={handleSubmit}>
              <FormField name="title">
                <Flex
                  css={{
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                  }}
                >
                  <FormLabel>Title</FormLabel>
                  <FormMessage match="valueMissing">
                    Please enter at least one character
                  </FormMessage>
                </Flex>
                <FormControl asChild onChange={handleTitleChange} value={title}>
                  <Input type="text" required />
                </FormControl>
              </FormField>
              <ColorPicker color={color} onChange={setColor} />
              <div className="buttons">
                <Button type="submit">Save</Button>
                <DialogClose asChild>
                  <Button variant="outline">Dismiss</Button>
                </DialogClose>
              </div>
            </Form>
          </StyledTagFormContainer>
          <DialogCloseButton>
            <Icon as={Clear} />
          </DialogCloseButton>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

const StyledTagFormContainer = styled('div', {
  mt: '$8',
  fontSize: '$sm',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '$6',

  '.buttons': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '$4',
  },
})
