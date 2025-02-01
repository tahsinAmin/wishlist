import { json } from "@remix-run/node";
import db from "../db.server";
import { cors } from 'remix-utils/cors';

// https://youtu.be/Mfe0oc8DUz0?t=190

export async function loader() {
    return json({ ok: true,
        message: "Hello, world!" });
}

export async function action({ request }) {
    const method = request.method;

    let data = await request.formData();
    data = Object.fromEntries(data);
    const customerId = data.customerId;
    const productId = data.productId;
    const shop = data.shop;

    console.log("customerId =", customerId);
    console.log("productId =", productId);
    console.log("shop =", shop);


    if (!customerId || !productId || !shop) {
        return json({
            message: "Missing data. Required data: customerId, productId, shop",
            method: method
        })
    }

    switch(method) {
        case "POST":
            const wishlist = await db.wishlist.create({
                data: {
                    customerId,
                    productId,
                    shop,
                },
            });

            const response = json({ message: "Product added to wishlist", method: "POST", wishlist });
            return cors(request, response);

        case "PUT":
            return json({ message: "Successful",  method: "PUT" });
        case "DELETE":
            return json({ message: "Successful",  method: "DELETE" });
        default:
            return json({ ok: false,
                message: "Method not supported" });
    }
}