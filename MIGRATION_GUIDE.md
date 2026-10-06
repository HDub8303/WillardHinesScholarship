# Migration notes

Publish and test the GitHub Pages URL before changing an existing site's domain. Follow README.md. Do not cancel existing hosting until content, navigation, images, and contact methods have been checked on the new site.

All internal URLs are relative to support both a GitHub project URL and a custom domain. No custom-domain CNAME or canonical URL is set because the destination domain is unknown.

The source download script is optional. It uses the original Wix image URLs. Downloaded images are included so visitors do not depend on Wix for those assets. Google Fonts remains an optional external dependency with local font fallbacks.

Forms are previews until a real backend is configured. No submissions are simulated, stored, or sent by this package. Direct email remains available. Donation pages request verified instructions rather than pointing to a generic payment homepage.

The original drafts contained unsupported press attributions, annual dates with no year, and incomplete donation/tax details. Public pages now avoid presenting these as verified. Keep source drafts privately if needed for later editorial verification; they are not included in the publishing folder.

## Additional source update

Added 57 unique archive photos and two original historical PDFs. Scholarship Awards, Guidelines, Apply, and Press now use these sources with explicit historical labels. The inaccurate generic application preview was replaced with a historical PDF download and a request for current instructions. See SOURCE_ASSETS.md. Current dates, donation details, and online submissions remain unconfigured.
