import { json } from "@remix-run/node";

export async function loader() {
    return json({ ok: true,
        message: "Hello, world!" });
}

export async function action({ request }) {
    const method = request.method;

    switch(method) {
        case "POST":
            return json({ message: "Successful",  method: "POST" });
        case "PUT":
            return json({ message: "Successful",  method: "PUT" });
        case "DELETE":
            return json({ message: "Successful",  method: "DELETE" });
        default:
            return json({ ok: false,
                message: "Method not supported" });
    }
}