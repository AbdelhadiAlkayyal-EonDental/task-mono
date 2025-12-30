import { Button, Card, CardContent, Label } from '@org/ui';
import { ImageIcon, Upload, X } from 'lucide-react';
import { useRef } from 'react';
import { IFileUploaderProps } from '../model/file-uploader.types';

export function FileUploader({
  field,
  label,
  accept,
  uploads,
  handleFileChange,
  removeFile,
}: IFileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Card>
      <CardContent className="p-6">
        <Label
          htmlFor={field as string}
          className="text-sm font-medium mb-2 block"
        >
          {label}
        </Label>

        <div
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
          <p className="text-sm text-gray-600 mb-1">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
        </div>

        <input
          ref={inputRef}
          id={field as string}
          name={field as string}
          type="file"
          accept={accept}
          multiple
          className="hidden"
          onChange={(e) => handleFileChange(field as string, e.target.files)}
        />

        {uploads[field as string]?.length > 0 && (
          <div className="mt-4 space-y-2">
            {uploads[field as string].map((fileId: string) => (
              <div
                key={fileId}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <ImageIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-700 truncate max-w-[200px]">
                    {fileId}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(field as string, fileId)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default FileUploader;
