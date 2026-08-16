# Hostinger MSI file hosting

The marketing site on Vercel validates email domains server-side, then returns the installer URL from `DOWNLOAD_REGISTRY`. Only Vercel project admins can edit the registry.

## Folder layout

Subdomain `files.digibimhub.com` → `public_html/files/`

```text
public_html/files/
  installers/
    test.msi
```

Public URL example:

```text
https://files.digibimhub.com/installers/test.msi
```

## Vercel env (admin only)

```bash
DOWNLOAD_REGISTRY={"products":[{"id":"revit-sheets","link":"https://files.digibimhub.com/installers/test.msi","domains":["acme.com","digibimhub.com"]}]}
```

## Manual tests

| Test | Expected result |
|------|-----------------|
| Whitelisted company email on `/downloads` | Success card + Download button |
| Unknown company domain | Access denied + Contact CTA |
| Gmail / Yahoo address | Blocked before whitelist check |

## Note

The registry and installer URL are only returned after a whitelisted email passes the API check. To change who can download or which installer is served, update `DOWNLOAD_REGISTRY` in Vercel — not in the website code.
