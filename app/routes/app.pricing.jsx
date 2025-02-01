import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function PricingPage() {

  let products = [
    { name: "Product 1", selected: false, price: 27.72 },
    { name: "Product 2", selected: false, price: 94.2 },
    { name: "Product 3", selected: false, price: 34.97 },
    { name: "Product 4", selected: false, price: 85.87 },
    { name: "Product 5", selected: false, price: 85.39 },
    { name: "Product 6", selected: false, price: 10.97 },
    { name: "Product 7", selected: false, price: 87.36 },
    { name: "Product 8", selected: false, price: 97.6 },
    { name: "Product 9", selected: false, price: 66.91 },
    { name: "Product 10", selected: false, price: 11.45 }
  ];

  return (
    <Page>
      <TitleBar title="Pricing Page" />
      <Layout>
        <Layout.Section>
            {products.map((product, index) => (
               <Card key={index}>
                <BlockStack gap="300">
                <Text as="p" variant="bodyMd">
                  {product.name}
                  <Link
                    url="https://shopify.dev/docs/apps/tools/app-bridge"
                    target="_blank"
                    removeUnderline
                  >
                    App Bridge
                  </Link>
                  .
                </Text>
                <Text as="p" variant="bodyMd">
                  To create your own page and have it show up in the app
                  navigation, add a page inside <Code>app/routes</Code>, and a
                  link to it in the <Code>&lt;NavMenu&gt;</Code> component found
                  in <Code>app/routes/app.jsx</Code>.
                </Text>
              </BlockStack>
            </Card>
            ))}
          
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Resources
              </Text>
              <List>
                <List.Item>
                  <Link
                    url="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
                    target="_blank"
                    removeUnderline
                  >
                    App nav best practices
                  </Link>
                </List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
