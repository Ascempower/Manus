export default function ContactForm() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div style="width: 100%; min-height: 1400px; padding: 2rem 0;">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScw-dgH0FXYkm_O-BjGXNVQrmXM9cwHdluCZ-D87oqE5aiPpg/viewform?embedded=true"
              width="100%"
              height="1400"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              style="border: none;">
              Loading…
            </iframe>
          </div>
        `,
      }}
    />
  );
}
