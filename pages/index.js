import React from 'react'
import { withRedux } from '../src/redux'
import UsersTable from '../components/usersTable'

const Home = () => (
  <>
    <UsersTable />
  </>
)

export default withRedux(Home)