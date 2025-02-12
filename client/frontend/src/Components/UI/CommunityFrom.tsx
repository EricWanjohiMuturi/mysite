import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export function CommRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.consent) {
      setMessage("Please agree to the terms before submitting.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://emore.co.ke/api/community-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Registration successful! ✅ Check your email for more information. ");
        setFormData({ name: "", email: "", phone: "", consent: false });
      } else {
        setMessage(result.message || "Something went wrong! ❌");
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card 
    className="sm:w-96 bg-transparent"
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
    >
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Typography 
        variant="h3" 
        color="white"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        >
          Emore Devs
        </Typography>
        <Typography 
        color="white"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        >
          Join The Community of Developers
        </Typography>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardBody 
        className="flex flex-col gap-4"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        >
          <Input
            variant="standard"
            label="Your Name"
            size="lg"
            name="name"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            crossOrigin="anonymous" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            variant="standard"
            label="Email"
            size="lg"
            name="email"
            type="email"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            crossOrigin="anonymous" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            variant="standard"
            label="Phone Number"
            size="lg"
            name="phone"
            type="tel"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            crossOrigin="anonymous" 
            value={formData.phone}
            onChange={handleChange}
            required
          />
            <div className="-ml-2.5 my-2">
            <Checkbox
              className="text-grey"
              label="By checking this box, I consent & agree to share this information. Terms & Conditions Apply"
              name="consent"
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin="anonymous" 
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            </div>
        </CardBody>
        <CardFooter 
        className="pt-0"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        >
          <Button 
          className="mt-6" 
          fullWidth color="blue" 
          type="submit" 
          disabled={loading}
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          >
            {loading ? "Submitting..." : "Join"}
          </Button>
          {message && <Typography placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}color="red" className="mt-2">{message}</Typography>}
        </CardFooter>
      </form>
    </Card>
  );
}
