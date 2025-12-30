import { useState, useRef, useCallback } from 'react';
import { IUploadState } from './photo-and-xray.types';
import { useOutletContext } from 'react-router-dom';
import { OutletContext } from '@org/pages-summary';

const usePhotoAndXray = () => {
  const { onNavigate, dispatchActionHandler } =
    useOutletContext<OutletContext>();

  const formRef = useRef<HTMLFormElement>(null);
  const [uploads, setUploads] = useState<IUploadState>({
    frontPhoto: [],
    sidePhoto: [],
    xray: [],
  });

  const handleFileChange = useCallback(
    (field: keyof typeof uploads, files: FileList | null) => {
      if (!files) return;

      const fileArray = Array.from(files);
      const newIds = fileArray.map(
        (_, index) => `${field}-${Date.now()}-${index}`,
      );

      setUploads((prev) => ({
        ...prev,
        [field]: [...prev[field], ...newIds],
      }));
    },
    [],
  );

  const removeFile = useCallback((field: keyof typeof uploads, id: string) => {
    setUploads((prev) => ({
      ...prev,
      [field]: prev[field].filter((fileId) => fileId !== id),
    }));
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = {
        frontPhoto: uploads.frontPhoto,
        sidePhoto: uploads.sidePhoto,
        xray: uploads.xray,
      };

      dispatchActionHandler({
        type: 'photo',
        payload: data,
      });

      // Navigate to another route
      onNavigate('/impressions');
    },
    [uploads, onNavigate, dispatchActionHandler],
  );

  return { handleFileChange, handleSubmit, removeFile, uploads, formRef };
};

export default usePhotoAndXray;
