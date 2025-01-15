import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  InlineGrid,
  TextField,
  Divider,
  useBreakpoints,
  Button,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useState} from "react";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";


export async function loader() {
  // provides data to the component

  const settings = {
    name: "My App",
    description: "This is a description of my app",
  }

  return json(settings);
}


export async function action({ request }) {

  let settings = await request.formData();
  settings = Object.fromEntries(settings);
  // updates persistent data
  return json(settings);
}


export default function SettingsPage() {
  const settings = useLoaderData();
  const [formState, setFormState] = useState(settings);

  return (
    <Page>
      <TitleBar title="Settings" />
      <BlockStack gap={{ xs: "800", sm: "400" }}>
        <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
          <Box
            as="section"
            paddingInlineStart={{ xs: 400, sm: 0 }}
            paddingInlineEnd={{ xs: 400, sm: 0 }}
          >
            <BlockStack gap="400">
              <Text as="h3" variant="headingMd">
                Settings
              </Text>
              <Text as="p" variant="bodyMd">
                Update app settigns and preferences
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            <Form method="POST">
            <BlockStack gap="400">
                <TextField label="App Name" name="name" value={formState.name} onChange={(value) => setFormState({ ...formState, name: value })}/>
                <TextField label="Description" name="description"  value={formState.description} onChange={(value) => setFormState({ ...formState, description: value })}/>
                  <Button submit={true}>Save</Button>
              </BlockStack>
            </Form>
          </Card>
        </InlineGrid>
        
      </BlockStack>
    </Page>
  );
}
