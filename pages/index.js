import React from 'react'
import { withRedux } from '../src/redux'
import UsersTable from '../components/usersTable'

const Home = () => {
  return (
    <div>
      <UsersTable />
    </div>
  )
}

export default withRedux(Home)