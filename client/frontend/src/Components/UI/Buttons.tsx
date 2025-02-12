import { Button } from "@material-tailwind/react";

interface ButtonProps {
  label: string;
}

export function CTAbuttonfilled({ label }: ButtonProps) {
  return (
    <div className="flex w-max gap-4">
      <Button 
      variant="gradient"
      size="md"
      color="blue"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      >
        { label }
      </Button>
    </div>
  );
}

export function CTAbuttonoutlined({ label }: ButtonProps) {
    return (
      <div className="flex w-max gap-4">
        <Button 
        variant="outlined"
        size="md"
        color="blue"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        >
          { label }
        </Button>
        
      </div>
    );
  }