import { Button, Input } from '@org/ui';
import { useCallback, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OutletContext } from '@org/pages-summary';

export function OrgPagesPatientInfo() {
  const { onNavigate, isAligner, dispatchActionHandler } =
    useOutletContext<OutletContext>();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!formRef.current) return;

      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries()) as {
        firstName: string;
        lastName: string;
        doctorName: string;
      };

      dispatchActionHandler({
        type: 'patientInfo',
        payload: data,
      });
      onNavigate(isAligner ? '/photo' : '/impressions');
    },
    [onNavigate, isAligner, dispatchActionHandler],
  );

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full"
    >
      <div className="grid grid-cols-3 gap-2">
        <Input
          id="firstName"
          name="firstName"
          label="First Name"
          placeholder="Patient first name"
          required
        />

        <Input
          id="lastName"
          name="lastName"
          label="Last Name"
          placeholder="Patient last name"
          required
        />

        <Input
          id="doctorName"
          name="doctorName"
          label="Doctor Name"
          placeholder="Doctor name"
          required
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

export default OrgPagesPatientInfo;
