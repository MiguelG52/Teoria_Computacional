import Title from "./components/Title";
import Layout from "./layout";
import {IncisoA,IncisoB} from './views';
function App() {

  return (
    <Layout>
      <div className="col-start-2 col-end-5 bg-white shadow-xl rounded-lg p-10">
      <Title title="Practica 2: Automatas Finitos"/>
      <IncisoA/>
      <IncisoB/>


      </div>
    </Layout>
  )
}

export default App
