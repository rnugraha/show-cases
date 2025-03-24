import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { RegistreeContext } from "@/app/App";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  countryCode: z.string().regex(/^\+\d{1,3}$/),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Invalid phone number",
  }),
  birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Please select a valid date",
  }),
  gender: z.enum(["male", "female", "non-binary"], {
    message: "Please select gender",
  }),
  streetName: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  postalCode: z.string().regex(/^\d{5}$/, {
    message: "Please enter valid postal code",
  }),
  country: z.enum(["US", "GB", "AU", "IN", "CA"], {
    message: "Please select country",
  }),
  badmintonLevel: z.enum(["beginner", "intermediate", "advanced"]),
  membershipRules: z.boolean({ message: "Please accept the membership rules" }),
});

function RegistrationForm() {
  const context = useContext(RegistreeContext);
  const { registree, setRegistree } = context;

  let navigate = useNavigate();
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: registree || {},
  });

  function onSubmitMe(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (!values.membershipRules) {
      form.setError("membershipRules", {
        type: "manual",
        message: "Please accept the membership rules",
      });
      return;
    }
    setRegistree(values);
    navigate("/confirm");
  }

  return (
    <div className="container max-w-fit mr-auto px-4">
      <Form {...form}>
        <form className="mt-8" onSubmit={form.handleSubmit(onSubmitMe)}>
          <div className="space-y-4 mb-10">
            <h2 className="text-lg font-bold">Personal Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First name */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="mb-0">
                    <FormLabel className="block text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Last name */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="mb-0">
                    <FormLabel className="block text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email address */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="johndoe@email.com "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone number */}
            <div className="mb-4">
              <FormLabel className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </FormLabel>
              <div className="flex mt-1 gap-4">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="+1">🇺🇸 +1</SelectItem>
                          <SelectItem value="+44">🇬🇧 +44</SelectItem>
                          <SelectItem value="+61">🇦🇺 +61</SelectItem>
                          <SelectItem value="+91">🇮🇳 +91</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="tel" placeholder="0666666666" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Birth Date */}
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="mb-0">
                    <FormLabel className="block text-sm font-medium text-gray-700">
                      Date of Birth <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      {/* TODO: Change to shadcn components */}
                      <Input
                        type="date"
                        {...field}
                        max={minDate.toISOString().split("T")[0]}
                        className="mt-1 block w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gender */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="mb-0">
                    <FormLabel className="block text-sm font-medium text-gray-700">
                      Gender <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="non-binary">Non Binary</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <h2 className="text-lg font-bold">Contact Details</h2>

            {/* Street name */}
            <FormField
              control={form.control}
              name="streetName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Street Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} placeholder="123 Main St" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="col-span-3 mb-0">
                    <FormLabel className="block text-sm font-medium text-gray-700">
                      City <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="New York"
                        className="mt-1 block w-full "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Postal code */}
              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem className="col-span-2 mb-0">
                    <FormLabel className="block text-sm font-medium text-gray-700">
                      Postal Code <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="12345"
                        className="mt-1 block w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Country <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="US">🇺🇸 United States</SelectItem>
                        <SelectItem value="GB">🇬🇧 United Kingdom</SelectItem>
                        <SelectItem value="AU">🇦🇺 Australia</SelectItem>
                        <SelectItem value="IN">🇮🇳 India</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4 mb-10">
            <h2 className="text-lg font-bold">Badminton Level</h2>
            <FormField
              control={form.control}
              name="badmintonLevel"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Give indication your badminton skill{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      className="mt-2 space-y-2"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="beginner" />
                        </FormControl>
                        <FormLabel className="font-normal">Beginner</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="intermediate" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Intermediate
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="advanced" />
                        </FormControl>
                        <FormLabel className="font-normal">Advanced</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="mb-4">
            <div className="mt-5 space-y-2">
              <FormField
                control={form.control}
                name="membershipRules"
                render={({ field }) => (
                  <>
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="ml-2 block text-sm text-gray-900">
                        I confirm that information I provided is true and that I
                        am at least 18 years old.
                      </FormLabel>
                    </FormItem>
                    <FormMessage className="ml-2 block" />
                  </>
                )}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              type="reset"
              className="mr-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default RegistrationForm;
