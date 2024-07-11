import { Textarea } from "./ui/textarea";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  return (
    <Card className="mx-auto max-w-full border-none bg-transparent">
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Input
                id="first-name"
                placeholder="Name"
                className="border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
                required
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="email"
                placeholder="Email"
                required
                className="border-neutral-200 bg-neutral-50  dark:border-neutral-700 dark:bg-neutral-800"
              />
            </div>
          </div>
          <Textarea
            placeholder="Hello, I would like to..."
            rows={6}
            className="border-neutral-200 bg-neutral-50  dark:border-neutral-700 dark:bg-neutral-800"
          />
          <Button type="submit" className="w-full">
            Send!
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
