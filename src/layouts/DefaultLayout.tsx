import { FC } from 'react'

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <div>header</div>
      {children}
      <div>footer</div>
    </>
  )
}

export default DefaultLayout
