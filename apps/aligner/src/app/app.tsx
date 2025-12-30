import { ActionType, ISummaryData } from '@org/pages-summary';
import { Sidebar } from '@org/widgets-sidebar';
import { useReducer } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { InitValue, reducer } from '@org/entities-summary';

export function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, dispatch] = useReducer<ISummaryData, [action: ActionType]>(
    reducer,
    InitValue,
  );

  const dispatchActionHandler = (action: ActionType) => {
    dispatch(action);
  };

  return (
    <div className="h-screen grid grid-cols-[250px_1fr]">
      <Sidebar nameApp={'Aligner'} activeLocation={location.pathname} />

      <main className="bg-gray-50 p-8 h-full overflow-auto">
        <Outlet
          context={{
            onNavigate: (path: string) => navigate(path),
            isAligner: true,
            state,
            dispatchActionHandler,
          }}
        />
      </main>
    </div>
  );
}

export default App;
