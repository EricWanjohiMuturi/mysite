import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  theroute: string;
}

export function CTAbuttonfilled({ label, theroute }: ButtonProps) {
  return (
    <div className="flex w-max gap-4">
      <Link to={ theroute }>
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
      </Link>
    </div>
  );
}

export function CTAbuttonoutlined({ label, theroute }: ButtonProps) {
    return (
      <div className="flex w-max gap-4">
        <Link to={ theroute }>
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
        </Link>
      </div>
    );
  }