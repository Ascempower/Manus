// Static 404 page that bypasses the layout to avoid useRef SSR issues
export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found | Choice Insurance Hub</title>
        <meta name="description" content="The page you're looking for could not be found." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background: linear-gradient(135deg, #1a4d3a 0%, #d4a574 100%);
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
            }
            .container { text-align: center; max-width: 600px; padding: 2rem; }
            h1 { font-size: 6rem; font-weight: bold; margin-bottom: 1rem; }
            h2 { font-size: 2rem; margin-bottom: 1rem; }
            p { font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.9; }
            .buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
            .btn { 
              display: inline-block; 
              padding: 0.75rem 1.5rem; 
              text-decoration: none; 
              border-radius: 0.5rem; 
              font-weight: 600;
              transition: all 0.2s;
            }
            .btn-primary { background: white; color: #1a4d3a; }
            .btn-primary:hover { background: #f0f0f0; }
            .btn-secondary { border: 2px solid white; color: white; }
            .btn-secondary:hover { background: white; color: #1a4d3a; }
            @media (max-width: 640px) {
              h1 { font-size: 4rem; }
              h2 { font-size: 1.5rem; }
              .buttons { flex-direction: column; align-items: center; }
            }
          `,
          }}
        />
      </head>
      <body>
        <div className="container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Sorry, we couldn't find the page you're looking for. The page may have been moved,
            deleted, or you may have entered an incorrect URL.
          </p>
          <div className="buttons">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="btn btn-primary">
              Return Home
            </a>
            {}
            <a href="/contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
