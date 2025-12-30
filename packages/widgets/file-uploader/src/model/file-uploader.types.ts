export interface IFileUploaderProps<T = any> {
  field: keyof T;
  label: string;
  uploads: T;
  accept?: string;
  removeFile: (field: keyof T, id: string) => void;
  handleFileChange: (field: keyof T, files: FileList | null) => void;
}
