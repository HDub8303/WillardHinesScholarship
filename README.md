# Willard J. Hines Memorial & Voice Scholarship

Static website prepared from the supplied migration files. No installation or build step is required. The screenshot reference theme is reproduced with a light gray background, red accents, black circular links, a red-framed WJH logo, Georgia serif headings, and Montserrat body text.

## Publish on GitHub Pages

1. Extract the ZIP. Create a GitHub repository (for example `willardjhines`).
2. Upload the **contents** of the `willardjhines` folder to the repository root, preserving `css/`, `js/`, and `images/`. `index.html` must be at the root, not inside another folder.
3. Ensure `.nojekyll` is included. GitHub's web uploader may omit hidden files; if needed create it with Add file → Create new file. Add a comment or newline if the editor requires content.
4. Commit to `main`.
5. Open Settings → Pages → Build and deployment. Select **Deploy from a branch**, **main**, **/(root)**, then Save.
6. Open the published URL shown in Pages settings, typically `https://YOUR-USERNAME.github.io/willardjhines/`.

GitHub's official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

For a custom domain, use Settings → Pages after initial publication and follow GitHub's current domain verification and DNS instructions. No domain is assumed in this package.

## Preview locally

Run `python3 -m http.server 8000` from this folder and visit http://localhost:8000. On Windows, `py -m http.server 8000` may be available instead.

## Content and submissions

The contact form is deliberately disabled until a real submission endpoint is configured. Email links open the visitor's email application; they do not automatically send messages. GitHub Pages hosts static files and does not provide a form backend.

To enable a form: choose a submission provider, configure its HTTPS endpoint as the form `action`, retain `method="post"`, remove `data-unconfigured` and the fieldset's `disabled`, then update the notice and test a real delivery. The application also needs a confirmed method for transcripts, recommendation letters, and other supporting materials. Do not put credentials or submitted applications in this repository.

## Before announcing the website

Scholarship categories and guidelines reflect the supplied 2021 PDFs and are labeled historical. Confirm the current award rules and deadlines with the team. The biography and historical committee details use supplied material.

Confirm the contact email and Instagram account. Add the real Facebook account if available. Confirm donation recipient, payment links, check payee, mailing address, tax status, and receipt information. PayPal, Zelle, and check mailing details are transcribed from Donations.jpg. Confirm the recipient details before sending a contribution. The screenshot’s tax-exemption claim is not presented as independently verified.

The Press page includes the supplied newspaper scan and historical scholarship recipient photographs. Full article transcription and committee biographies were not recreated from unreadable screenshot text. Confirm captions and add current committee biographies where needed. The gallery has 57 unique source photos with thumbnail selection and previous/next controls. Confirm permissions for images and retained creator credit before publication.

See REVIEW_REPORT.md for fixes and validation; FILE_STRUCTURE.md for layout.

## Additional source update

Added 57 unique archive photos and two original historical PDFs. Scholarship Awards, Guidelines, Apply, and Press now use these sources with explicit historical labels. The inaccurate generic application preview was replaced with a historical PDF download and a request for current instructions. See SOURCE_ASSETS.md. Current application dates and online submissions remain unconfigured. Donation details were subsequently supplied in the reference screenshots.

## Screenshot theme update

Use this v3 package instead of earlier ZIPs. The homepage uses circular links and three thumbnail photo viewers. Award pages use photo-and-text rows; Guidelines uses two columns on desktop; Contact has red form fields; Gallery and Press emphasize large photos. Layouts adapt to narrow screens. Wix editing guides, dashed borders, and editor overlays are excluded. See THEME_REFERENCE.md.
