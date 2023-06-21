import Typography from './components/Typography'
import ExampleArray from './examples/ExampleArray'
import ExampleBoolean from './examples/ExampleBoolean'
import ExampleObject from './examples/ExampleObject'
import ExampleString from './examples/ExampleString'

function App() {

  return (
    <div className='bg-sky-800 h-screen grid justify-center content-center gap-5'>
      <Typography size='title'>Boolean: </Typography>
      <ExampleBoolean />
      <Typography size='title'>String: </Typography>
      <ExampleString />
      <Typography size='title'>Object: </Typography>
      <ExampleObject />
      <Typography size='title'>Array: </Typography>
      <ExampleArray />
    </div>
  )
}

export default App
