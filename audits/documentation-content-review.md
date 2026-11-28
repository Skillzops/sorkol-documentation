# Documentation content and navigation review

Scope: all 56 MDX documentation pages, section navigation, local image references and internal page destinations. Compared onboarding instructions with ClientSignupPage, VerifyEmailPage, tenant activation lock/banner, subscription billing workspace and NewWarehouseModal in energy-saas-fe. No article or screenshot dates changed.

## Corrections

- Grouped daily operations as Sales, Inventory, Finance & payments, then PAYGO. Kept configuration and administration together afterwards.
- Replaced the introductory onboarding summary with a linked, ordered checklist. Moved the reference-style platform overview after setup.
- Replaced the standalone onboarding graphic with a readable checklist that agrees with the detailed guides.
- Distinguished email verification, pending company review, ACTIVE tenant status and subscription activation.
- Added the organisation-specific login handoff and the pending company's phone/CAC review requirements.
- Documented the manual subscription receipt approval step; uploading proof is not payment approval.
- Ordered workspace setup by dependency: roles, products/warehouses/stock, pricing, invoicing/payments, optional integrations/commissions, testing and automation.
- Added prerequisite and continuation links across operational sections. Put roles and permissions before user assignment, and invoices before payment/receipt handling.
- Added warehouse creation instructions matching the form. Explained that warehouse creation does not create stock.
- Clarified payment completion versus sale creation and guarded against duplicate deposits, schedules, payment records and vending retries.
- Aligned the One-Time Sale definition with the direct-sale guide.

## Validation

- Checked internal page destinations and local image references across all 56 pages: no missing destinations/assets.
- Type checking passed.
- Production export passed, including GitHub Pages base-path mode (174 generated routes).
- Confirmed rendered onboarding links include the GitHub Pages repository prefix.
- ESLint passed with two existing warnings in the MDX image adapter.

## Remaining coverage limitations

Several operational pages remain brief introductions, rather than complete field-by-field procedures. Customer onboarding, task/ticket management, mobile offline sync and detailed reporting still need dedicated guides verified against those workflows. This review does not assert that every optional feature, provider or security/service commitment has been exercised in a live tenant. Contractual support/hosting promises and third-party Odyssey UI should be rechecked against the relevant agreements/provider when changed.
