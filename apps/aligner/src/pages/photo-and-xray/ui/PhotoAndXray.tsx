import usePhotoAndXray from '../model/usePhotoAndXray';
import { FileUploader } from '@org/widgets-fileUploader';
import { Button } from '@org/ui';
import { IUploadState } from '../model/photo-and-xray.types';
export const PhotoAndXray = () => {
  const { formRef, handleFileChange, handleSubmit, removeFile, uploads } =
    usePhotoAndXray();

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <FileUploader
          field="frontPhoto"
          label="Front Photo"
          uploads={uploads}
          removeFile={(field, id) =>
            removeFile(field as keyof IUploadState, id)
          }
          handleFileChange={(field, files) =>
            handleFileChange(field as keyof IUploadState, files)
          }
        />
        <FileUploader
          field="sidePhoto"
          label="Side Photo"
          uploads={uploads}
          removeFile={(field, id) =>
            removeFile(field as keyof IUploadState, id)
          }
          handleFileChange={(field, files) =>
            handleFileChange(field as keyof IUploadState, files)
          }
        />
        <FileUploader
          field="xray"
          label="X-ray"
          uploads={uploads}
          removeFile={(field, id) =>
            removeFile(field as keyof IUploadState, id)
          }
          handleFileChange={(field, files) =>
            handleFileChange(field as keyof IUploadState, files)
          }
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" className="hover:bg-black ">
          Next
        </Button>
      </div>
    </form>
  );
};

export default PhotoAndXray;
