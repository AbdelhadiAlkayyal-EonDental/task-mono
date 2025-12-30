interface ISummaryData {
  patientInfo: {
    firstName: string;
    lastName: string;
    doctorName: string;
  };
  photo: {
    frontPhoto: string[];
    sidePhoto: string[];
    xray: string[];
  };
  impressions: {
    lowerImpressionPhoto: string[];
    upperImpressionPhoto: string[];
  };
  prescription: {
    complaint: string;
    notes: string;
    arch: 'Both' | 'Upper' | 'Lower';
  };
}

type ActionType =
  | { type: 'patientInfo'; payload: ISummaryData['patientInfo'] }
  | { type: 'photo'; payload: ISummaryData['photo'] }
  | { type: 'impressions'; payload: ISummaryData['impressions'] }
  | { type: 'prescription'; payload: ISummaryData['prescription'] }
  | { type: 'reset' };

export type { ActionType, ISummaryData };
