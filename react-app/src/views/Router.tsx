import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'src/views/Home'
import About from 'src/views/About'
import Layout from 'src/components/Layout'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
