import { FormInput, SubmitBtn } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { login } from "@/features/user/userSlice";
import { useAppDispatch } from "@/hooks";
import { ReduxStore } from "@/store";
import { customFetch } from "@/utils";
import { AxiosResponse } from "axios";
import {
  Form,
  Link,
  redirect,
  useNavigate,
  type ActionFunction,
} from "react-router-dom";

const Login = () => {
  document.title = `Sign In | ${import.meta.env.VITE_APP_TITLE}`;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuest = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await customFetch.post(`/auth/local`, {
        identifier: "test@test.com",
        password: "secret",
      });
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(login({ username, jwt }));
      navigate(`/`);
    } catch (error) {
      console.log(error);
      toast({ title: "Failed", description: "Login failed" });
    }
  };

  return (
    <section className="grid place-items-center">
      <Card className="bg-muted lg:w-96 w-full">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <FormInput name="identifier" type="email" label="email" />
            <FormInput name="password" type="password" label="password" />
            <SubmitBtn text="Login" className="w-full mt-4" />
            <Button
              type="button"
              variant={"outline"}
              className="w-full mt-4"
              onClick={loginAsGuest}
            >
              Guest User
            </Button>
            <p className="text-center mt-2">
              Not a member yet?
              <Button variant={"link"} asChild type="button">
                <Link to={`/register`}>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};
export default Login;

// Action function starts ------
export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response: AxiosResponse = await customFetch.post(
        `/auth/local`,
        data
      );
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      store.dispatch(login({ username, jwt }));

      toast({ title: "Login successful", description: `Welcome ${username}` });
      return redirect(`/`);
    } catch (error) {
      console.log(error);
      toast({ description: "Login failed" });
      return null;
    }
  };
