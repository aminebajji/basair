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
import { CheckIcon } from "lucide-react";

const LEVEL_OPTIONS = [
  { value: "1", label: "السنة الأولى" },
  { value: "2", label: "السنة الثانية" },
  { value: "3", label: "السنة الثالثة" },
  { value: "4", label: "السنة الرابعة" },
  { value: "5", label: "السنة الخامسة" },
];

const FIELD_OPTIONS = [
  { value: "AP", label: "AP" },
  { value: "GINF", label: "GINF" },
  { value: "GSEA", label: "GSEA" },
  { value: "GIL", label: "GIL" },
  { value: "GSTR", label: "GSTR" },
  { value: "GCYS", label: "GCYS" },
  { value: "G3EI", label: "G3EI" },
  { value: "MBISD", label: "MBISD" },
  { value: "MPSI", label: "MPSI" },
];

export default function JoinForm() {
  const [isENSAStudent, setIsENSAStudent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    level: "",
    field: "",
    gender: "male",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: formData.email,
          subject: "Form Submission Confirmation",
          text: `Hello ${formData.firstName},\n\nThank you for your submission!`,
        }),
      });
      console.log("Email sent successfully");
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle>انضم لنادي بصائر</CardTitle>
        <CardDescription>
          قم بملئ الاستمارة كاملة لكي تصبح عضوا في نادي بصائر
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">الإسم</Label>
              <Input
                id="firstName"
                className="focus-visible:ring-primary"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">النسب</Label>
              <Input
                id="lastName"
                className="focus-visible:ring-primary"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                className="focus-visible:ring-primary"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                dir="rtl"
                id="phone"
                type="tel"
                className="focus-visible:ring-primary"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Switch
              className="space-x-reverse"
              id="ensaStudent"
              checked={isENSAStudent}
              onCheckedChange={setIsENSAStudent}
            />
            <Label htmlFor="ensaStudent">
              هل تدرس بالمدرسة الوطنية للعلوم التطبيقية بطنجة؟
            </Label>
          </div>
          {isENSAStudent && (
            <div className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="level">المستوى الدراسي</Label>
                <Select
                  required
                  onValueChange={(value) => handleSelectChange("level", value)}
                >
                  <SelectTrigger
                    id="level"
                    className="focus:ring-primary"
                    dir="rtl"
                  >
                    <SelectValue placeholder="اختر المستوى" />
                  </SelectTrigger>
                  <SelectContent>
                    {LEVEL_OPTIONS.map(({ value, label }) => (
                      <SelectItem key={value} value={value} dir="rtl">
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="field">الشعبة</Label>
                <Select
                  required
                  onValueChange={(value) => handleSelectChange("field", value)}
                >
                  <SelectTrigger
                    id="field"
                    className="focus:ring-primary"
                    dir="rtl"
                  >
                    <SelectValue placeholder="اختر الشعبة" />
                  </SelectTrigger>
                  <SelectContent>
                    {FIELD_OPTIONS.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label>الجنس</Label>
            <RadioGroup
              defaultValue={formData.gender}
              required
              dir="rtl"
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, gender: value }))
              }
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">ذكر</Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">أنثى</Label>
              </div>
            </RadioGroup>
          </div>
          <CardFooter>
            <Button type="submit" className="w-full">
              انضم الآن
            </Button>
          </CardFooter>
          {/* Success message */}
          {formSubmitted && (
            <div className="flex items-center gap-3 rounded-md bg-green-50 p-4 dark:bg-green-900/10 mt-4">
              <div className="h-4 w-4 flex items-center justify-center rounded-full bg-green-500 text-white  md:h-8 md:w-8">
                <CheckIcon className="h-3 w-3 md:h-5 md:w-5" />
              </div>
              <div className="text-sm font-medium text-green-900 dark:text-green-50">
                شكرا على اهتمامك، سوف نتواصل معك في وقت قريب إن شاء الله.
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
