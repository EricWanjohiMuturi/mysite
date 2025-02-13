//import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Textarea, 
  Select, 
  Option,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export function ContactForm() {
 
  return (
    <Card 
    className="sm:w-full bg-transparent"
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
          Reach Out
        </Typography>
        <Typography 
        color="white"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        >
          Let's build soultions together
        </Typography>
      </CardHeader>
      <form>
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
            required
          />
          <Select 
          label="Select Topic"
          placeholder="Select Topic"
          className="text-grey"
          variant="standard"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          >
            <Option>---</Option>
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
            <Textarea 
            label="Message"
            variant="standard"
            size="lg"
            name="message"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
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
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          >
            Submit
          </Button>
        
        </CardFooter>
      </form>
    </Card>
  );
}
