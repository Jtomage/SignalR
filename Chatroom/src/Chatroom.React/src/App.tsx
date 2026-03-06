import {Routes, Route} from 'react-router-dom'
import { ChatPage } from './pages/ChatPage/ChatPage'
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  // This acts as your "Body Container"
  container: {
    display: 'flex',
    boxSizing: 'border-box', // Prevents padding from causing horizontal scroll
    padding: '20px',        // Optional internal spacing
    margin: '0',
    width: '100vw',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Routes>
        {/* The "/" path is typically your initial page */}
        <Route path="/" element={<ChatPage />} />
        {/* Catch-all for 404 pages */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
