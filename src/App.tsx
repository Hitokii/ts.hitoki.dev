import { ComponentProps } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import { useTheme } from './components/theme-provider';
import { cn } from './lib/utils';
import Home from './pages/home';

const CodeText = (props: ComponentProps<'span'>) => {
  return <span {...props} className={cn(props.className, 'bg-muted text-muted-foreground rounded font-mono text-sm p-1')} />
}


function App() {
  const { theme } = useTheme()
  return (
    <Router>
    <header>
      hello world!
    </header>
      <Routes>
      <Route path="/" element={<Home />} />
                <Route
                    path="*"
                    element={<h2>404</h2>}
                />
      </Routes>
    </Router>
  );
}

export default App;
