import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from '@org/ui';
import { FileText, ImageIcon, Scan, User } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { OutletContext } from '..';
import InfoItem from './info-item/InfoItem';
import ImageGallery from './image-gallery/ImageGallery';

export function OrgPagesSummary() {
  const { state, onNavigate, dispatchActionHandler, isAligner } =
    useOutletContext<OutletContext>();

  const resetHandler = () => {
    alert('Bravo');
    dispatchActionHandler({ type: 'reset' });
    onNavigate('./');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Case Summary</h1>
          <p className="text-gray-600 mt-1">Review all submitted information</p>
        </div>
      </div>

      {/* Patient Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Patient Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoItem label="First Name" value={state.patientInfo.firstName} />
            <InfoItem label="Last Name" value={state.patientInfo.lastName} />
            <InfoItem
              label="Doctor Name"
              value={state.patientInfo.doctorName}
            />
          </div>
        </CardContent>
      </Card>

      {/* Prescription Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Prescription Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">
                Chief Complaint
              </p>
              <p className="text-base text-gray-900 whitespace-pre-wrap">
                {state.prescription.complaint || 'N/A'}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">
                Additional Notes
              </p>
              <p className="text-base text-gray-900 whitespace-pre-wrap">
                {state.prescription.notes || 'N/A'}
              </p>
            </div>
          </div>
          <Separator />
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Treatment Arch</p>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {state.prescription.arch}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Photos - Optional */}
      {isAligner && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scan className="h-5 w-5" />
              Photos & X-rays
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ImageGallery
              images={state.photo?.frontPhoto || []}
              title="Front Photos"
            />
            {state.photo?.frontPhoto?.length > 0 &&
              state.photo?.sidePhoto?.length > 0 && <Separator />}
            <ImageGallery
              images={state.photo?.sidePhoto || []}
              title="Side Photos"
            />
            {(state.photo?.frontPhoto?.length > 0 ||
              state.photo?.sidePhoto?.length > 0) &&
              state.photo?.xray?.length > 0 && <Separator />}
            <ImageGallery
              images={state.photo?.xray || []}
              title="X-ray Images"
            />
          </CardContent>
        </Card>
      )}

      {/* Impressions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            Dental Impressions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ImageGallery
            images={state.impressions?.upperImpressionPhoto || []}
            title="Upper Impression"
          />
          {state.impressions?.upperImpressionPhoto?.length > 0 &&
            state.impressions?.lowerImpressionPhoto?.length > 0 && (
              <Separator />
            )}
          <ImageGallery
            images={state.impressions?.lowerImpressionPhoto || []}
            title="Lower Impression"
          />
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end mt-6">
        <Button onClick={() => resetHandler()} className="hover:bg-black">
          Submit Case
        </Button>
      </div>
    </div>
  );
}

export default OrgPagesSummary;
