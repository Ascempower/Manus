export default function ContactForm() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div style="width: 100%; min-height: 1400px; padding: 2rem 0;">
            <div id="ff-compose"></div>
            <script
              async
              defer
              src="https://formfacade.com/include/108178716957596495252/form/1FAIpQLScw-dgH0FXYkm_O-BjGXNVQrmXM9cwHdluCZ-D87oqE5aiPpg/classic.js?div=ff-compose">
            </script>
          </div>
        `,
      }}
    />
  );
}
