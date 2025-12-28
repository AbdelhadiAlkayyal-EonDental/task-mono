import { Sidebar } from '@org/widgets-sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-screen grid grid-cols-[250px_1fr]">
      <Sidebar
        nameApp={'Aligner'}
        onNavigate={(path) => navigate(path)}
        activeLocation={location.pathname}
      />

      <main className="bg-gray-50 p-8">
        <h2 className="text-3xl font-bold mb-4">HI </h2>
        <p className="text-gray-600">Content goes here</p>
      </main>
    </div>
  );
}

export default App;
