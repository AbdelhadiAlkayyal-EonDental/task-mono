import useImpressions from '../model/useImpressions';
import { FileUploader } from '@org/widgets-fileUploader';
import { Button } from '@org/ui';
import { IUploadState } from '../model/impressions.types';
export function OrgPagesImpressions() {
  const { formRef, handleFileChange, handleSubmit, removeFile, uploads } =
    useImpressions();

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FileUploader
          field="upperImpressionPhoto"
          label="Upper Impression"
          uploads={uploads}
          removeFile={(field, id) =>
            removeFile(field as keyof IUploadState, id)
          }
          handleFileChange={(field, files) =>
            handleFileChange(field as keyof IUploadState, files)
          }
        />
        <FileUploader
          field="lowerImpressionPhoto"
          label="Lower Impression"
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
}

export default OrgPagesImpressions;
