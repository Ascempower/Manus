import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

// Use the latest working formFacadeURL from your published Formfacade embed
const FORMFACADE_URL =
  "https://formfacade.com/include/109671923741510513923/form/1FAIpQLSetAzIt89c0hBCWhI1AzUWRXDQ0VV1JAUph6i_3dvNpT-ZpqA/classic.js?div=ff-compose";

export default function ContactForm() {
  const onSubmitForm = () => {
    console.log("✅ Form successfully submitted");
  };

  return (
    <div style={{ width: "100%", minHeight: "1200px", padding: "2rem 0" }}>
      <FormfacadeEmbed
        formFacadeURL={FORMFACADE_URL}
        onSubmitForm={onSubmitForm}
        // Remove or comment out prefillForm unless you're using specific entry IDs
        // prefillForm={...}
      />
    </div>
  );
}
