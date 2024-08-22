import { FormInput, SubmitBtn } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { customFetch } from "@/utils";
import { AxiosError } from "axios";
import { ActionFunction, Form, Link, redirect } from "react-router-dom";

const Register = () => {
  document.title = `Sign Up | ${import.meta.env.VITE_APP_TITLE}`;

  return (
    <section className="grid place-items-center">
      <Card className="lg:w-96 w-full bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput name="username" type="text" />
            <FormInput name="email" type="email" />
            <FormInput name="password" type="password" />
            <SubmitBtn text="Submit" className="w-full mt-4" />
            <p className="text-center mt-4">
              Already a member?{" "}
              <Button type="button" asChild variant={"link"}>
                <Link to={`/login`}>Login</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
export default Register;

// Action function starts ------
const url = `/auth/local/register`;

export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post(url, data);
    toast({
      title: "Registration successful",
      description: "Welcome to Store Project | React + TS",
    });
    return redirect(`/login`);
  } catch (error) {
    console.log(error);
    const errMsg =
      error instanceof AxiosError
        ? error?.response?.data.error.message
        : "Registration failed";
    toast({ title: "Failed", description: errMsg });
    return null;
  }
};
