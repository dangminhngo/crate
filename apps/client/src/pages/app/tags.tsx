import { Suspense, lazy } from 'react'
import TagFormDialog from '~/components/dialogs/tag-form-dialog'
import { Label, Sort } from '~/components/icons'
import { Container, Icon } from '~/components/primitive'
import IconButton from '~/components/shared/icon-button'
import SectionSkeleton from '~/components/skeletons/section-skeleton'
import { useTagList } from '~/hooks'
import { styled } from '~/stitches.config'

const TagList = lazy(() => import('~/components/tag-list'))

export default function TagsPage() {
  const { status, data: tags } = useTagList()

  if (status === 'loading') return <SectionSkeleton />

  if (status === 'error') return <div>There was an error</div>

  return (
    <StyledTagsPage>
      <Container className="container">
        <div className="titlebar">
          <div className="titlebar__left">
            <h3>
              <Icon size="xl" as={Label} />
              Tags
            </h3>
          </div>
          <div className="titlebar__right">
            <span>Last edited Apr 28</span>
            <span>{tags.length} notes</span>
            <div className="buttons">
              <TagFormDialog />
              <IconButton tooltip="Sort">
                <Icon as={Sort} />
              </IconButton>
            </div>
          </div>
        </div>
        {tags.length > 0 ? (
          <Suspense fallback={<SectionSkeleton />}>
            <TagList tags={tags} />
          </Suspense>
        ) : (
          <p className="message">You have no tags</p>
        )}
      </Container>
    </StyledTagsPage>
  )
}

const StyledTagsPage = styled('div', {
  flex: 1,
  px: '$6',
  py: '$48',

  '.container': {
    maxW: '$lg',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '$8',
  },

  '.titlebar': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '.titlebar__left': {
    '& h3': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '$2xl',
      gap: '$2',
    },
  },

  '.titlebar__right': {
    display: 'flex',
    alignItems: 'center',
    gap: '$6',
    '& span': {
      color: '$slate400',
    },
  },

  '.titlebar__right .buttons': {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },

  '.message': {
    textAlign: 'center',
  },
})
