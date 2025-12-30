import { ISummaryData, ActionType } from '@org/pages-summary';
export const InitValue: ISummaryData = {
  patientInfo: {
    firstName: '',
    lastName: '',
    doctorName: '',
  },
  photo: {
    frontPhoto: [],
    sidePhoto: [],
    xray: [],
  },
  impressions: {
    lowerImpressionPhoto: [],
    upperImpressionPhoto: [],
  },
  prescription: {
    complaint: '',
    notes: '',
    arch: 'Both',
  },
};

export function reducer(state: ISummaryData, action: ActionType): ISummaryData {
  switch (action.type) {
    case 'patientInfo':
      return {
        ...state,
        patientInfo: action.payload,
      };

    case 'photo':
      return {
        ...state,
        photo: action.payload,
      };

    case 'impressions':
      return {
        ...state,
        impressions: action.payload,
      };

    case 'prescription':
      return {
        ...state,
        prescription: action.payload,
      };

    case 'reset':
      return InitValue;

    default:
      throw Error('Unknown action: this Type ');
  }
}
