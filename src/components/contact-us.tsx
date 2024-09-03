"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import TitleLayout from "./layouts/title-layout";
import { CheckIcon } from "lucide-react"; // Adjust the import based on your project structure

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email:'',
    subject:" مرحبا أريد تواصل معكم",
    message: "",
  });

 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await fetch("/api/recieve-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:formData.email,
          name: formData.name,
          subject: " تواصل معنا : طلب استفسار",
          message:formData.message,
        }),
      });
      console.log("Email sent successfully");
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };


  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <TitleLayout title="تواصل معنا" />
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            هل لديك سؤال أو استفسار؟ املأ النموذج أدناه وسنعود إليك في أقرب وقت
            ممكن إن شاء الله.
          </p>
        </div>
        <Card className="w-full max-w-md mx-auto p-4">
          <CardContent>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">الاسم</Label>
                <Input
                  id="name"
                  placeholder="أدخل اسمك"
                  className="focus-visible:ring-primary"
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="focus-visible:ring-primary"
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">الرسالة</Label>
                <Textarea
                  id="message"
                  placeholder="أخبرنا كيف يمكننا المساعدة"
                  className="min-h-[150px] focus-visible:ring-primary"
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full">
                إرسال
              </Button>
            </form>
            {formSubmitted && (
              <div className="flex items-center gap-3 rounded-md bg-green-50 p-4 dark:bg-green-900/10 mt-4">
                <div className="flex items-center justify-center rounded-full bg-green-500 text-white  h-4 w-4">
                  <CheckIcon className="h-4 w-4" />
                </div>
                <div className="text-sm font-medium text-green-900 dark:text-green-50">
                  شكرا على اهتمامك، سوف نتواصل معك في وقت قريب إن شاء الله.
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
