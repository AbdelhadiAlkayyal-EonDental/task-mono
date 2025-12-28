import { Sidebar } from '@org/widgets-sidebar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
export function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-screen grid grid-cols-[250px_1fr]">
      <Sidebar
        nameApp={'Retainer'}
        onNavigate={(path) => navigate(path)}
        activeLocation={location.pathname}
      />

      <main className="bg-gray-50 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
