const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-base text-gray-900">{value || 'N/A'}</p>
  </div>
);

export default InfoItem;
