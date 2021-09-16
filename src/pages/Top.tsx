import { Button, Card } from 'components/UIkit'
import { DefaultLayout } from 'layouts'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`

const Top: React.FC = () => {
  return (
    <DefaultLayout>
      <Wrapper>
        <Card width="500px" height="300px">
          <Button width="200px" borderRadius="50px">
            テスト開始
          </Button>
        </Card>
      </Wrapper>
    </DefaultLayout>
  )
}

export default Top
