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
    return (
      <Card className="sm:w-96 bg-transparent"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      >
        <CardHeader
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
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
          <form action="" method="post">
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
              required
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin="" 
              />
              <Input 
              variant="standard"
              label="Email" 
              size="lg" 
              required 
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin=""
              />
              <Input 
              variant="standard"
              label="Phone Number" 
              size="lg" 
              required 
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin=""
              />
              {/* <Select label="Select Service">
                <Option>Website Design</Option>
                <Option>Custom Software Development</Option>
                <Option>Search Engine Optimization</Option>
                <Option>Mobile App Development</Option>
                <Option>Cloud & Hosting Services</Option>
                <Option>ChatBot & Automations</Option>
                <Option>Other..</Option>
              </Select> */}
              {/* <Textarea label="Message" required/> */}
              <div className="-ml-2.5">
                <Checkbox 
                label="By checking this box, I consent & agree to share this information" 
                required 
                className="flex text-left text-sm text-grey-600"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                crossOrigin=""
                />
              </div>
            </CardBody>
            <CardFooter 
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className="pt-0">
              <Button 
              className="mt-6" 
              fullWidth
              color="blue"
              type="submit"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              >
                Join
              </Button>
            </CardFooter>
          </form>
        </Card>
    );
}