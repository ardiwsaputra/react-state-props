import Typography from './components/Typography'
import ExampleArray from './examples/ExampleArray'
import ExampleBoolean from './examples/ExampleBoolean'
import ExampleObject from './examples/ExampleObject'
import ExampleString from './examples/ExampleString'
import ExampleArrayObject from "./examples/ExampleArrayObject"

function App() {

  return (
    <div className='grid content-center justify-center gap-5 bg-sky-800'>
      <Typography size='title'>Boolean: </Typography>
      <ExampleBoolean />
      <Typography size='title'>String: </Typography>
      <ExampleString />
      <Typography size='title'>Object: </Typography>
      <ExampleObject />
      <Typography size='title'>Array: </Typography>
      <ExampleArray />
      <Typography size='title'>Array of Object: </Typography>
      <ExampleArrayObject />
    </div>
  )
}

export default App
