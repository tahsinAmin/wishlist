import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export async function action({
  request,
}) {
  const formData = await request.formData();
  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const errors = {};

  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (name.length < 1) {
    errors.password =
      "Password should be at least 12 characters";
  }

  if (password.length < 3) {
    errors.password =
      "Password should be at least 12 characters";
  }

  

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
  
  return redirect("/dashboard");
}

const handleSubmit = () => {
  
}
export default function Signup() {
    const actionData = useActionData();
    return (
        <Form >
           <p>
          Name<input type="text" name="name" />
          {actionData?.errors?.name ? (
            <em>{actionData?.errors.name}</em>
          ) : null}
        </p>
        <p>
          Email<input type="email" name="email" />
          {actionData?.errors?.email ? (
            <em>{actionData?.errors.email}</em>
          ) : null}
        </p>
  
        <p>
          Password<input type="password" name="password" />
          {actionData?.errors?.password ? (
            <em>{actionData?.errors.password}</em>
          ) : null}
        </p>
  
        <button onclick={() => handleSubmit()}>Sign Up</button>
      </Form>
      );
}