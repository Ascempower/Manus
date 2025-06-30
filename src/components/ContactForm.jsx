import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

export default function ContactForm() {
  return (
    <div style={{ width: "100%", minHeight: "1200px", padding: "2rem 0" }}>
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/108178716957596495252/form/1FAIpQLScw-dgH0FXYkm_O-BjGXNVQrmXM9cwHdluCZ-D87oqE5aiPpg/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
}
