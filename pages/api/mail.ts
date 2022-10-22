import { NextApiRequest, NextApiResponse } from "next";
import * as sg from "@sendgrid/mail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  sg.setApiKey(process.env.SENDGRID_KEY || "");

  const { from, text, name } = JSON.parse(req.body);

  if (req.method !== "POST") {
    res.status(400).send("The request method is not POST");
  }

  const msg = {
    to: "pasztorg05+foton@gmail.com",
    from,
    text,
    subject: `${name} | Foton WP Agency`,
  };

  sg.send(msg)
    .then(() => res.status(200).redirect("/email-success"))
    .catch((error) =>
      res.status(500).json({
        message: "Email couldn't be sent due to an internal error.",
        error,
      })
    );
}
