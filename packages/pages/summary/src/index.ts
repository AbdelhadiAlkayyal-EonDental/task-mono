import { ActionType, ISummaryData } from './model/summary.types';

export type { ActionType, ISummaryData } from './model/summary.types';
export { OrgPagesSummary } from './ui/summary';

// Global Type For Testing

export type OutletContext = {
  onNavigate: (path: string) => void;
  isAligner?: boolean;
  dispatchActionHandler: (action: ActionType) => void;
  state: ISummaryData;
};
