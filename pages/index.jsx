
import Layout from './Layout/Layout'
import TodosContainer from './Components/TodosContainer'

export async function getServerSideProps() {
  const res = await fetch('http://localhost:7777/todos')
  const todos = await res.json()
  
  
  return { props: { todos } }
}

function Home({todos}) {

  return (
    <>
    <Layout>
      <TodosContainer todos={todos}/>
    </Layout>
    </>
  )
}

export default Home
