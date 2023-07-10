// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application";

import AutoSaveController from "./auto_save_controller";
application.register("auto-save", AutoSaveController);

import GovukAccordionController from "./govuk_accordion_controller";
application.register("govuk-accordion", GovukAccordionController);

import GovukButtonController from "./govuk_button_controller";
application.register("govuk-button", GovukButtonController);

import GovukCharacterCountController from "./govuk_character_count_controller";
application.register("govuk-character-count", GovukCharacterCountController);

import GovukCheckboxesController from "./govuk_checkboxes_controller";
application.register("govuk-checkboxes", GovukCheckboxesController);

import GovukDetailsController from "./govuk_details_controller";
application.register("govuk-details", GovukDetailsController);

import GovukErrorSummaryController from "./govuk_error_summary_controller";
application.register("govuk-error-summary", GovukErrorSummaryController);

import GovukHeaderController from "./govuk_header_controller";
application.register("govuk-header", GovukHeaderController);

import GovukNotificationBannerController from "./govuk_notification_banner_controller";
application.register(
  "govuk-notification-banner",
  GovukNotificationBannerController,
);

import GovukRadiosController from "./govuk_radios_controller";
application.register("govuk-radios", GovukRadiosController);

import GovukSkipLinkController from "./govuk_skip_link_controller";
application.register("govuk-skip-link", GovukSkipLinkController);

import GovukTabsController from "./govuk_tabs_controller";
application.register("govuk-tabs", GovukTabsController);
