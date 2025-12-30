import { OutletContext } from '@org/pages-summary';
import {
  Button,
  Card,
  CardContent,
  Label,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from '@org/ui';
import React, { useCallback, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

export function OrgPagesPrescription() {
  const { onNavigate, dispatchActionHandler } =
    useOutletContext<OutletContext>();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!formRef.current) return;

      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries()) as {
        complaint: string;
        notes: string;
        arch: 'Both' | 'Upper' | 'Lower';
      };

      dispatchActionHandler({
        type: 'prescription',
        payload: data,
      });
      onNavigate('/summary');
    },
    [onNavigate, dispatchActionHandler],
  );

  return (
    <form
      ref={formRef}
      className="flex flex-col justify-between h-full"
      onSubmit={handleSubmit}
    >
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">General Details</h2>

          <div className="space-y-8">
            {/* Chief Complaint and Additional Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="chiefComplaint"
                  className="text-base font-semibold text-gray-700"
                >
                  Chief Complaint <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="chiefComplaint"
                  name="complaint"
                  className="min-h-[120px] bg-gray-50 resize-none border-gray-200"
                  placeholder="Enter chief complaint..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="additionalNotes"
                  className="text-base font-semibold text-gray-700"
                >
                  Additional Notes :
                </Label>
                <Textarea
                  id="additionalNotes"
                  name="notes"
                  className="min-h-[120px] bg-gray-50 resize-none border-gray-200"
                  placeholder="Enter additional notes..."
                />
              </div>
            </div>

            {/* Arch Selection */}
            <div className="space-y-4">
              <Label className="text-base font-semibold text-gray-700">
                Arch <span className="text-red-500">*</span>
              </Label>
              <RadioGroup defaultValue="Both" name="arch" className="space-y-3">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="Both" id="both" />
                  <Label
                    htmlFor="both"
                    className="text-base font-normal cursor-pointer"
                  >
                    Upper & Lower
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="Upper" id="upper" />
                  <Label
                    htmlFor="upper"
                    className="text-base font-normal cursor-pointer"
                  >
                    Upper
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="Lower" id="lower" />
                  <Label
                    htmlFor="lower"
                    className="text-base font-normal cursor-pointer"
                  >
                    Lower
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end mt-6">
        <Button type="submit" className="hover:bg-black">
          Next
        </Button>
      </div>
    </form>
  );
}

export default OrgPagesPrescription;
