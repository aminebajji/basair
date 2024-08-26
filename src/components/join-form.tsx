"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function JoinForm() {
  const [isENSAStudent, setIsENSAStudent] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Join Our School Club</CardTitle>
        <CardDescription>
          Fill out this form to become a member of our club at ENSA Tangier.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" required />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="ensaStudent"
              checked={isENSAStudent}
              onCheckedChange={setIsENSAStudent}
            />
            <Label htmlFor="ensaStudent">
              Are you studying at ENSA Tangier?
            </Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="level">Education Level</Label>
            <Select required>
              <SelectTrigger id="level">
                <SelectValue placeholder="Select your level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1st Year</SelectItem>
                <SelectItem value="2">2nd Year</SelectItem>
                <SelectItem value="3">3rd Year</SelectItem>
                <SelectItem value="4">4th Year</SelectItem>
                <SelectItem value="5">5th Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup defaultValue="male" required>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Join Now
        </Button>
      </CardFooter>
    </Card>
  );
}
